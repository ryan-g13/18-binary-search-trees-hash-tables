'use strict';

require('dotenv').config();

if (!process.env.NODE_ENV) {
  throw new Error('Undefined NODE_ENV');
}

// Loading Babel in development settings
if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

// Transpiling application
require('./src/main');
