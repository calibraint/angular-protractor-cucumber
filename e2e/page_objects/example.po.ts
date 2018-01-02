'use strict';

const _ = require('lodash');
let example = require('./example.po.json');

// add custom page object here
let po = {
  'url': 'https://facebook.com',
  'test_email': 'email@facebook.com',
  'test_password': 'password'
};

example['Facebook'] = _.assign(example['Facebook'], po);

module.exports = (function () {
  return example;
})();
