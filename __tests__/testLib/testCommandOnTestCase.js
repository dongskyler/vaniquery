/**
 * Test function vanilla on test case
 */

const path = require('path');
const { loadFileToBuffer } = require('../../build/lib/helpers');

exports.testVanillaOnTestCase = (testCase) => {
  const { vanillaize } = require('../../build/lib/vanilla'); // eslint-disable-line global-require

  test(`Vanillaize '${testCase}'`, async () => {
    // Input
    const testCaseFile = path.join(__dirname, '..', 'testCases', `${testCase}.js`);
    const argv = {
      _: ['vanilla', testCaseFile],
      C: true,
      'no-cache': true,
      noCache: true,
      $0: 'vaniquery',
    };

    // Output
    const output = await vanillaize(argv);

    // Answer key
    const answerKeyFile = path.join(
      __dirname,
      '..',
      'testCases',
      `${testCase}.answerkey.js`
    );
    const answerKey = await loadFileToBuffer(answerKeyFile);

    // Expect
    expect(output).toEqual(answerKey);
  });
};
