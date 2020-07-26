/**
 * Main test script
 */

const path = require('path');
const { testVanillaOnTestCase } = require('./testLib/testCommandOnTestCase');
const { listAllFilesInDir } = require('../build/lib/helpers');

const testDir = path.join(__dirname, 'finishedTestChallenges');
const testCases = listAllFilesInDir(testDir);

describe("Test command 'vanilla' on several test cases", () => {
  testCases.forEach((testCase) => {
    testVanillaOnTestCase(testCase);
  });
});
