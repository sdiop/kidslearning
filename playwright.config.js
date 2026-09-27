const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './test/browser',
  timeout: 30000,
  fullyParallel: false,
  use: {
    baseURL: 'http://127.0.0.1:5000',
    launchOptions: {
      executablePath: process.env.CHROMIUM_PATH || '/repl/tools/bin/chromium'
    },
    headless: true
  },
  webServer: {
    command: 'node server.js',
    url: 'http://127.0.0.1:5000',
    reuseExistingServer: true,
    timeout: 30000
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 } } }
  ]
});