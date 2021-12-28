import {readFileSync} from 'fs';
import {resolve as resolvePath} from 'path';

// TODO: Should we detect if a file extension is provided?
export function getFixture(fileName) {
  return readFileSync(
    resolvePath(__dirname, 'fixtures', `${fileName}.svg`),
    'utf8',
  );
}
