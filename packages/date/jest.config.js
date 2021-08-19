module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 50,
      lines: 85,
      statements: 85
    }
  }
}
