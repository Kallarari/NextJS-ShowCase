const nextJest = require('next/jest')
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
})
 
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['./setup-jest.js']
}
 
module.exports = createJestConfig(config)