/**
 * Main test script
 */

import path from 'path';
import testVanillaOnTestCase from './testLib/testCommandOnTestCase';
import { listAllFilesInDir } from '../lib/helpers';

const testDir = path.join(__dirname, 'finishedTestChallenges');
const testCases: string[] = listAllFilesInDir(testDir, '.test.ts');

describe("Test command 'vanilla' on several test cases", () => {
  testCases.forEach((testCase) => {
    testVanillaOnTestCase(testCase);
  });
});
