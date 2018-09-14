'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    autoImport:{
      exclude: ['some-package'],
      webpack: {
        // extra webpack configuration goes here
      }
    }
  },
  contentFor: (type, config) => {
    switch (type) {
      case 'head':
      case 'head-footer':
      case 'body':
        return '';
        break;
      case 'body-footer':
        if (config.environment === 'test') {
          return '';
        } else {
          return '';
        }
        break;
    }
  }
};
