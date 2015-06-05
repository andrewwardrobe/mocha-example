global.requirejs = require("requirejs")

requirejs.config(
  nodeRequire: require
  baseUrl: __dirname
  paths : {
    "common":"mocha_require_common",
    "jsdom":"lib/jsdom/lib/jsdom",
    "jquery":"lib/jquery/jquery",
    "leek":"javascripts/leek"
  }
)

# A few modules that all tests will use
global.should = requirejs("lib/should.js/should")
global.assert = require("assert")