// jest.config.js
export default {
  // Set the test environment to simulate a browser-like environment (uses jsdom by default)
  testEnvironment: 'jest-environment-jsdom',

  // Transform for handling JavaScript and JSX files using babel-jest
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest', // Transform .mjs files for ESM compatibility
  },

  // Treat specific extensions as ESM modules
  extensionsToTreatAsEsm: ['.jsx'],

  // File extensions supported by Jest
  moduleFileExtensions: ['js', 'jsx', 'mjs'],

  // Mock non-JS module imports like CSS or image files
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocks CSS imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mocks image imports
  },

  // Setup files to configure the testing environment before each test suite
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  // Ignore transformation of node_modules except for specific packages
  transformIgnorePatterns: ['/node_modules/(?!(some-esm-package)/)'], // Adjust if you need to transform specific ESM modules

  // Code coverage collection configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/setupTests.js',
    '!src/index.js',
  ],
};
