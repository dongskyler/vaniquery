module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['<rootDir>/src/__tests__/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['<rootDir>/src/__tests__/pendingTestChallenges/.*$'],
  testPathIgnorePatterns: ['(testCases).*$'],
};
