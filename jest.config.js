module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['<rootDir>/src/__tests__/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['(testCases).*$'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/__tests__/'],
  coverageDirectory: '<rootDir>/coverage/',
};
