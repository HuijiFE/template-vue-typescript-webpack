'use strict';
const path = require('path');

const solution = {
  // common chunks, all page apps will will use these modules.
  commons: {
    style: './src/main.scss', // for bundle all style in one file.
  },
  entries: {
    main: './src/main.ts',
  },
  pages: [
    {
      entry: 'main',
      template: './src/main.html',
      output: '', // empty means output index.html to assets root
    },
    {
      entry: 'main',
      template: './src/pages/vuejs.html',
      output: 'vuejs',
    },
    {
      entry: 'main',
      template: './src/pages/typescript.html',
      output: 'typescript',
    },
    {
      entry: 'main',
      template: './src/pages/domghost.html',
      output: 'domghost',
    },
  ],
};

module.exports = solution;
