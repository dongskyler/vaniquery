/**
 * Test function vanilla on test case
 */

import path from 'path';
import fs from 'fs';
import { loadFileToBuffer } from '../../lib/helpers';
import { vanillaize } from '../../lib/vanilla';

const testVanillaOnTestCase = (testCase: string): void => {
  test(`Vanillaize '${testCase}'`, async () => {
    // Check if test case file exists
    const testCaseFile = path.join(__dirname, '..', 'testCases', `${testCase}.js`);
    if (!fs.existsSync(testCaseFile)) {
      throw new ReferenceError(
        `Test case file '${testCaseFile}' does not exist. Aborting.`
      );
    }

    // Check if answer key file exists
    const answerKeyFile = path.join(
      __dirname,
      '..',
      'testCases',
      `${testCase}.answerkey.js`
    );
    if (!fs.existsSync(answerKeyFile)) {
      throw new ReferenceError(
        `Answer key file ${answerKeyFile} does not exist. Aborting.`
      );
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

export default testVanillaOnTestCase;
