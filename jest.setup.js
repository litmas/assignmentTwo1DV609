import { TextDecoder, TextEncoder } from 'util';
import 'jest-extended';

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

module.exports = {
  setupFilesAfterEnv: ['jest-extended'],
};

module.exports = {
    moduleNameMapper: {
      '^eslint-v8$': '<rootDir>/node_modules/eslint',
    },
  };
  