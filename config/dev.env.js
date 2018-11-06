'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const hosturl= 'http://m.holdhealth.com.cn/';

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  hosturl: hosturl
})
