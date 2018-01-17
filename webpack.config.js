const webpack = require('webpack');
const path = require('path');

const config = {
      context: path.resolve(__dirname, 'static/js'),
      entry: ['./app.js', './controllers/results.controller.js', './services/results.service.js'],
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/dist'),
      },
    };

module.exports = config;
