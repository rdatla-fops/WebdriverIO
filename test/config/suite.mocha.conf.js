
exports.config = {
    runner: 'local',
    specs: [
      // Patterns to Include.
       './test/specs/*.spec.js'
    ],
    exclude: [
      // Patterns to exclude.
    ],
    maxInstances: 1,

    capabilities: [
      {
        // 1 instance get started at a time.
        maxInstances: 1,
        browserName: 'chrome'
      },
  ],
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',               
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    baseUrl: 'http://localhost:3333',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,            
    services: ['selenium-standalone'],
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 90000,
      compilers: ['js:@babel/register'],
    },

     reporters: ['spec', 'junit','allure', 'json', 'mochawesome'],
     reporterOptions: {
         allure: {
           outputDir:   './test/reports/allure-results/',
           disableWebdriverStepsReporting: false,
         },
     },
    reporters: [
        'spec',
        ['allure', {
            outputDir: './test/reports/allure-results/',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
          }
        ],
    ],
    onPrepare: function (config, capabilities) {
      console.log('**** Testing Start ****');
    },
    beforeSession: function (config, capabilities, specs) {
        require('@babel/register');
    },
    before: function (capabilities, specs) {
      /**
       * Setting up the Chai assertion framework
       */
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
    onComplete: function(exitCode) {
      console.log('**** END of All Testing ****');
    }
}
