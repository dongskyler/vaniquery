/**
 * Test function vanilla on test case
 */

const path = require('path');
const fs = require('fs');
const { loadFileToBuffer } = require('../../build/lib/helpers');

exports.testVanillaOnTestCase = (testCase) => {
  const { vanillaize } = require('../../build/lib/vanilla'); // eslint-disable-line global-require

  test(`Vanillaize '${testCase}'`, async () => {
    // Check if test case file exists
    const testCaseFile = path.join(__dirname, '..', 'testCases', `${testCase}.js`);
    if (!fs.existsSync(testCaseFile)) {
      console.error(
        new ReferenceError('Test case file does not exist. Aborting testing.')
      );
      return;
    }

    // Check if answer key file exists
    const answerKeyFile = path.join(
      __dirname,
      '..',
      'testCases',
      `${testCase}.answerkey.js`
    );
    if (!fs.existsSync(answerKeyFile)) {
      console.error(
        new ReferenceError('Answer key file does not exist. Aborting testing.')
      );
      return;
    }

    // Input argument values
    const argv = {
      _: ['vanilla', testCaseFile],
      C: true,
      'no-cache': true,
      noCache: true,
      $0: 'vaniquery',
    };

    // Get output
    const output = await vanillaize(argv);

    // Get answer key
    const answerKey = await loadFileToBuffer(answerKeyFile);

    // Expect
    expect(output).toEqual(answerKey);
  });
};
