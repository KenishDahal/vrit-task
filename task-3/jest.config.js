// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',  // Use the newly installed jest-environment-jsdom
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for jest-dom
};

module.exports = createJestConfig(customJestConfig);
