#!/usr/bin/env node --harmony

const
  App = require('../app')
;

App({
  pg: {
    database: 'sonet',
    user: 'betula'
  },
  hostname: '127.0.0.1',
  port: 2020
});