const { resolve } = require('node:path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/Meseum_2/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tickets: resolve(__dirname, 'buy-ticket.html'),
        exhibitions: resolve(__dirname, 'exhibitions.html'),
      },
    },
  },
});
