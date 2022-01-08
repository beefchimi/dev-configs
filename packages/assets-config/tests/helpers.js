import {readFileSync} from 'fs';
import {resolve as resolvePath} from 'path';

// Should we detect if a file extension is provided?
export function getFixture(fileName) {
  return readFileSync(
    resolvePath(__dirname, 'fixtures', `${fileName}.svg`),
    'utf8',
  );
}
