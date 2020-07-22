/**
 * Main test script
 */

const fs = require('fs');
const { vanilla } = require('../lib/vanilla');
const loadFileToBuffer = require('../lib/loadFileToBuffer');

const testDir = './__tests__/finishedTestChallenges/';
const testNames = [];
fs.readdirSync(testDir).forEach((filename) => {
  testNames.push(filename.substr(0, filename.indexOf('.test.js')));
});

describe("Test command 'vanilla'", () => {
  testNames.forEach((testName) => {
    test(`Vanillaize '${testName}'`, async () => {
      // Input
      const argv = {
        _: ['vanilla', `./__tests__/testCases/${testName}.js`],
        C: true,
        'no-cache': true,
        noCache: true,
        $0: 'vaniquery',
      };

      // Output
      const output = await vanilla(argv);

      // Answer key
      const answerKeyFile = `./__tests__/testCases/${testName}.answerkey.js`;
      const answerKey = await loadFileToBuffer(answerKeyFile);

      // Expect
      expect(output).toEqual(answerKey);
    });
  });
});
