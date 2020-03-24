'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API:'"http://scrm-dev.work-online.cn/"',
  // BASE_API:'"http://skytankai.51vip.biz/"',
})
