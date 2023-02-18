module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/testUtils.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  }
}
