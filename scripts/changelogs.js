// This script must be run as the `version` command in your root `package.json`.
// This allows the script to hook into the `lerna version` command.
// The `version` hook runs after version keys in `package.json`
// have been updated, but before the changes are comitted.
// This allows the script to update CHANGELOG.md files with versions
// that match those selected when choosing what packages to update.

// Upon execution, the script completes one of the two tasks:
// 1. All CHANGELOG.md files containing an "Unreleased" heading will:
// Comment out the heading and add a new heading for the new version of the package.
// 2. All CHANGELOG.md files containing a commented out "Unreleased" heading will:
// Add a new heading for the new version of the dependency and note that the only
// change is a result of a transitive dependency update.

import path from 'path';
import {execSync} from 'child_process';
import {readFileSync, writeFileSync} from 'fs';

const ROOT_PATH = path.resolve(__dirname, '..');

const modifiedPackageJsons = execSync(`git diff --name-only`, {stdio: ['pipe']})
  .toString()
  .trim()
  .split('\n')
  .filter((filename) => filename.endsWith('package.json'));

const packageLocations = JSON.parse(
  execSync(`npm run --silent lerna changed --json`, {stdio: ['pipe']}),
)
  .map(({location}) => location)
  .filter((location) =>
    modifiedPackageJsons.includes(
      path.relative(ROOT_PATH, path.join(location, 'package.json')),
    ),
  );

const updatedChangelogs = packageLocations
  .map((location) => updateChangelogForPackage(location))
  .filter((changelog) => changelog !== '');

if (updatedChangelogs.length > 0) {
  const changelogsForGit = updatedChangelogs
    .map((changelogPath) => JSON.stringify(changelogPath))
    .join(' ');

  execSync(`git add ${changelogsForGit}`);
}

function updateChangelogForPackage(packageLocation) {
  const packageJsonPath = path.join(packageLocation, 'package.json');
  const changelogPath = path.join(packageLocation, 'CHANGELOG.md');
  const relativeChangelogPath = path.relative(ROOT_PATH, changelogPath);

  const newVersion = JSON.parse(readFileSync(packageJsonPath)).version;
  const changelogContent = readFileSync(changelogPath, 'utf8');

  if (newVersion.includes('-')) {
    console.log(
      `- ${relativeChangelogPath}: Skipping as ${newVersion} is a prerelease`,
    );
    return '';
  }

  if (changelogContent.includes(`\n## ${newVersion}`)) {
    console.log(
      `- ${relativeChangelogPath}: Skipping as ${newVersion} header is already present`,
    );
    return '';
  }

  if (changelogContent.includes('\n## Unreleased\n')) {
    console.log(
      `- ${relativeChangelogPath}: Replacing Unreleased header with ${newVersion} header`,
    );

    const newContent = changelogContent.replace(
      '\n## Unreleased\n',
      `\n<!-- ## Unreleased -->\n\n${headingFormat(newVersion)}\n`,
    );
    writeFileSync(changelogPath, newContent);
    return changelogPath;
  }

  if (changelogContent.includes('\n<!-- ## Unreleased -->\n')) {
    console.log(`- ${relativeChangelogPath}: Adding ${newVersion} header`);

    const newContent = changelogContent.replace(
      '\n<!-- ## Unreleased -->\n',
      `\n<!-- ## Unreleased -->\n\n${headingFormat(
        newVersion,
      )}\n\n- No updates. Transitive dependency bump.\n`,
    );
    writeFileSync(changelogPath, newContent);
    return changelogPath;
  }

  console.warn(
    `- ${relativeChangelogPath}: Skipping as no commented, or uncommented 'Unreleased' header was found`,
  );

  return '';
}

function headingFormat(version) {
  // Date based on iso8601 - YYYY-MM-DD format
  const isoDate = new Date().toISOString().split('T')[0];
  return `## ${version} - ${isoDate}`;
}
