const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/ @type {import('jest').Config} */
const customJestConfig = {
  testMatch: ['/*.test.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);