const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'so1f2m',
  
  viewportHeight: 800,
  viewportWidth: 1200,

  e2e: {
    baseUrl: 'https://tapsshop.pl/',
  },
});
