export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/app/$1',
    '@element/(.*)': '<rootDir>/app/components/elements/$1',
    '@layout/(.*)/(.*)$': '<rootDir>/app/components/layouts/$1/$2',
    '@module/(.*)/(.*)$': '<rootDir>/app/components/modules/$1/$2',
    '@template/(.*)/(.*)$': '<rootDir>/app/components/templates/$1/$2',
    '@constant/(.*)/(.*)$': '<rootDir>/app/constants/$1/$2',
    '@context/(.*)/(.*)$': '<rootDir>/app/context/$1/$2',
    '@hook/(.*)/(.*)$': '<rootDir>/app/hooks/$1/$2',
    '@util/(.*)/(.*)$': '<rootDir>/app/utils/$1/$2',
  },
};
