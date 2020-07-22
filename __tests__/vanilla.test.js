/**
 * Test function vanilla
 */

const fs = require('fs');
const { vanilla } = require('../lib/vanilla');

const loadAnswerKey = async (answerKeyFile) => {
  return new Promise((resolve) => {
    const stream = fs.createReadStream(answerKeyFile);
    stream.on('data', (buffer) => {
      resolve(buffer.toString());
    });
  });
};

describe('Test vanilla', () => {
  test("Vanillaize 'document ready'", async () => {
    // Input
    const argv = {
      _: ['vanilla', './__tests__/testCases/documentReady.js'],
      C: true,
      'no-cache': true,
      noCache: true,
      $0: 'vaniquery',
    };

    // Output
    const output = await vanilla(argv);

    // Answer key
    const answerKeyFile = './__tests__/testCases/documentReady.answerkey.js';
    const answerKey = await loadAnswerKey(answerKeyFile);

    // Expect
    expect(output).toEqual(answerKey);
  });
});
