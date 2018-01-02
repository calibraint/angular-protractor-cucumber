'use strict';

const config = require('./protractor.shared.conf').config;

config.multiCapabilities = [
  {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars']
    },
    shardTestFiles: true,
    maxInstances: 1,
    deviceProperties: {
      browser: {
        name: 'chrome',
        version: 'latest'
      },
      device: 'Mac Machine',
      platform: {
        name: 'osx',
        version: '10.12.6'
      }
    }
  }
];

config.baseUrl = 'https://facebook.com';

exports.config = config;
