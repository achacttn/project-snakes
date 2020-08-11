// const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
// const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // airbnb(),
    react({
      // publicPath: '/sp/',      
      html: {
        title: 'Single-player Snake'
      }
    }),
    // jest(),
  ],
};
