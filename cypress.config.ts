import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  includeShadowDom: true,
  defaultCommandTimeout: 60000,
  video: false,
  videoCompression: 12,
  numTestsKeptInMemory: 0,
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: 'cypress-showcase-tests',
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: 'cypress/tests/**/*.spec.ts',
    chromeWebSecurity: false,
  },
});
