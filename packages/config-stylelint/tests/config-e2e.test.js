const {spawnSync} = require('child_process');
const path = require('path');
const {resolve} = require('path');

// Cannot update this dependency until the project is converted to TS + ESM.
const stripAnsi = require('strip-ansi');

// Tests that report errors in multiple files may change the order
// of the files across multiple runs.
// To avoid flaky tests, assert the reporting of errors
// in one file only per test case. Asserting no errors
// are reported across multiple files is ok.

describe('config-stylelint E2E Tests', () => {
  it('configures value-keyword-case', () => {
    const result = runStylelint('value-keyword-case.*.scss');

    const expectedResult = `
value-keyword-case.invalid.scss
 1:7   ✖  Expected "Value" to be "value"    value-keyword-case
 2:7   ✖  Expected "VALUE" to be "value"    value-keyword-case
 5:10  ✖  Expected "Monaco" to be "monaco"  value-keyword-case
 6:16  ✖  Expected "Monaco" to be "monaco"  value-keyword-case
`.trim();

    expect(result.output).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });

  it('configures scss files', () => {
    const result = runStylelint('scss.*.scss');

    // The trailing `${''}` is very silly,
    // but stylelint spits out a bunch of trailing whitespace
    // and editors really want to remove that trailing
    // whitespace when saving the file.
    const expectedResult = `
scss.invalid.scss
  8:7   ✖  Expected ".n1 .n2 .n3 .n4" to have no more than 3 classes                                              selector-max-class                  ${''}
  8:7   ✖  Expected ".n1 .n2 .n3 .n4" to have no more than 3 compound selectors                                   selector-max-compound-selectors     ${''}
  8:7   ✖  Expected ".n1 .n2 .n3 .n4" to have a specificity no more than "0,3,1"                                  selector-max-specificity            ${''}
 15:1   ✖  Expected "div > [disabled] + .n3 ~ .n4" to have no more than 3 compound selectors                      selector-max-compound-selectors     ${''}
 22:3   ✖  Unexpected union class name with the parent selector (&)                                               scss/selector-no-union-class-name   ${''}
 27:1   ✖  Expected "#MyId" to have no more than 0 ID selectors                                                   selector-max-id                     ${''}
 27:1   ✖  Expected "#MyId" to have a specificity no more than "0,3,1"                                            selector-max-specificity            ${''}
 35:1   ✖  Expected "input[type='text'][placeholder]" to have no more than 1 attribute selector                   selector-max-attribute              ${''}
 53:5   ✖  Unexpected duplicate selector "button.thing[disabled]", first used at line 47                          no-duplicate-selectors              ${''}
 63:20  ✖  Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally.  scss/dimension-no-non-numeric-values
`.trim();

    expect(result.output).toStrictEqual(expectedResult);
    expect(result.status).toBe(2);
  });
});

function runStylelint(pattern) {
  const stylelintCmd = resolve(__dirname, `../node_modules/.bin/stylelint`);

  const result = spawnSync(stylelintCmd, [pattern], {
    cwd: path.resolve(__dirname, 'fixtures'),
  });

  return {
    status: result.status,
    output: stripAnsi(result.stdout.toString()).trim(),
    error: stripAnsi(result.stderr.toString()).trim(),
  };
}
