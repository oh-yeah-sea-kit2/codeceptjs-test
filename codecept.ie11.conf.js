const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      // browser: 'chrome'
      browser: 'internet explorer',
      desiredCapabilities: {
        ieOptions: {
          "ie.browserCommandLineSwitches": "-private",
          "ie.usePerProcessProxy": true,
          "ie.ensureCleanSession": true,
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-test',
  translation: 'ja-JP',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}