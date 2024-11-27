import type { Config } from 'jest';

const config: Config = {
  // Use the ts-jest preset for handling TypeScript with ESM
  preset: 'ts-jest/presets/default-esm',  // Make sure this preset is correctly used for modern ESM-based TypeScript projects

  clearMocks: true, // Automatically clear mocks after each test
  collectCoverage: true,  // Enable coverage collection
  coverageDirectory: 'coverage',  // Output coverage to 'coverage' directory
  coverageProvider: 'v8',  // Use the V8 coverage provider for better accuracy

  // Mapping for static assets like images
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  // Alias mapping for '@' to src directory
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts', // Mock static files like images
  },

  // Ensure TypeScript files are transformed by ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Handle TypeScript (.ts, .tsx) files using ts-jest
  },

  // Don't transform node_modules unless specified
  transformIgnorePatterns: [
    'node_modules/',  // This means we won't transform most third-party modules
  ],

  // Automatically clean up mocks before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Use jsdom for browser-like environment during tests
  testEnvironment: 'jsdom',

  // Enable detailed output
  verbose: true,
};

export default config;
