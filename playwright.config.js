import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 40000,
  expect : {
    timeout: 3000
  },
  use: {
    browserName: 'chromium',
    headless: false
  },
});
module.exports=config
