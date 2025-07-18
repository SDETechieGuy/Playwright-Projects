import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 40000,
  expect : {
    timeout: 35000
  },
  use: {
    browserName: 'chromium'   
  },
});
module.exports=config
