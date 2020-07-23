/**
 * Test function vanilla on test case
 */

const { loadFileToBuffer } = require('../../lib/helpers');

exports.testVanillaOnTestCase = (testCase) => {
  const { vanilla } = require('../../lib/vanilla'); // eslint-disable-line global-require

  test(`Vanillaize '${testCase}'`, async () => {
    // Input
    const argv = {
      _: ['vanilla', `./__tests__/testCases/${testCase}.js`],
      C: true,
      'no-cache': true,
      noCache: true,
      $0: 'vaniquery',
    };

    // Output
    const output = await vanilla(argv);

    // Answer key
    const answerKeyFile = `./__tests__/testCases/${testCase}.answerkey.js`;
    const answerKey = await loadFileToBuffer(answerKeyFile);

    // Expect
    expect(output).toEqual(answerKey);
  });
};
