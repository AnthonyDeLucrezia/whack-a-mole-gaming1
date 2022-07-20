module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['./src/components/**', '!./src/components/**/*.stories.*'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "babel-jest",
        "\\.(css|scss)$": "identity-obj-proxy"
      }
  };
  