const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Configuración de resolucion de pantalla (Aplica para todos los scripts)
    //viewPortWidth: 382,
    //viewPortHeigth: 587,
  },
});
