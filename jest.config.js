// Jest configuration
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);