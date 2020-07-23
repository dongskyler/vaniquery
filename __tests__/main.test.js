/**
 * Main test script
 */

const { testVanillaOnTestCase } = require('./lib/testCommandOnTestCase');
const { listAllFilesInDir } = require('../lib/helpers');

const testDir = './__tests__/finishedTestChallenges/';
const testCases = listAllFilesInDir(testDir);

describe("Test command 'vanilla' on several test cases", () => {
  testCases.forEach((testCase) => {
    testVanillaOnTestCase(testCase);
  });
});
