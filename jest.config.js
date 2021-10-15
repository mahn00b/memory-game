module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  roots: ["<rootDir>/components"],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/?(*.)+(test).[jt]s?(x)',
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '.storybook',
    '/.next/',
    '/node_modules/',
    '/storybook/',
    '/.storybook/',
    '/storybook-static/',
    '/pages/'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
