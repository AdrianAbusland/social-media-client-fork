const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {},
    defaultCommandTimeout: 10000, // Increase timeout for commands
  },
});
