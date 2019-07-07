

### Installation
This project is tested on **Node v10.15.3**.  While earlier versions of node may be compatible, they have not been tested or verified.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/ 

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.


### Selenium Tests 

  To run your test you must have selenium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the .conf.js.

### Run Some Sample Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option : `npm run test`

### Config Files

In order to execute WebdriverIO in a specific way, The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files are found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli


##### Allure Reports

In order to generate a report of test results in allure report format locally, run `npm run allure-report`.