module.exports = {
  verbose: true,
  testMatch: ['**/__tests__/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['<rootDir>/__tests__/pendingTestChallenges/.*$'],
  testPathIgnorePatterns: ['(testCases).*$'],
};
