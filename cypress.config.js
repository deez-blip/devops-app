const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  e2e: {
    // si ton CRA tourne sur http://localhost:3000
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // invoqué automatiquement, tu peux y ajouter des plugins
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});