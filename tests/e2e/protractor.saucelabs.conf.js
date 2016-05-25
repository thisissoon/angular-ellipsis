var pkg = require('../../package.json');

// A saucelabs reference configuration file.
exports.config = {

  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 11000,

  // ----- What tests to run -----
  //
  // Spec patterns are relative to the location of this config.
  specs: [
    'specs/*.js'
  ],

  // Saucelabs capabilities reference
  // https://docs.saucelabs.com/reference/platforms-configurator/#/
  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Chrome: Linux) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '45',
    'platform': 'Linux'
  },{
    'browserName': 'firefox',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (FF: Linux) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '41',
    'platform': 'Linux'
  },{
    'browserName': 'safari',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Safari: OS X 10.11) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '9',
    'platform': 'OS X 10.11'
  },{
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (IE11: Win 8.1) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '11',
    'platform': 'Windows 8.1'
  },{
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (IE10: Win 8) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'version': '10',
    'platform': 'Windows 8'
  },{
    'browserName': 'Browser',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Android Browser: Android 5.1) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'platformName': 'Android',
    'platformVersion': '5.1',
    'deviceName': 'Android Emulator',
    'appiumVersion': '1.4.11',
    'deviceOrientation': 'portrait'
  },{
    'browserName': 'iphone',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name':  pkg.name + ' (Safari: iOS) Build: ' + process.env.TRAVIS_BUILD_NUMBER,
    'platform': 'OS X 10.10',
    'deviceName': 'iPhone 6',
    'deviceOrientation': 'portrait'
  }],

  // ----- More information for your tests ----
  //
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://127.0.0.1:8000',

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>
  rootElement: 'html',

  // ----- The test framework -----
  //
  // Jasmine is fully supported as a test and assertion framework.
  // Mocha has limited beta support. You will need to include your own
  // assertion framework if working with mocha.
  framework: 'jasmine',

  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  }

};
