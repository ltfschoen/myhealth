exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        args: ['--test-type']
    }
  },
  specs: ['./test/e2e/*_test.js'],
  baseUrl: 'http://localhost:9000' // default test port with Yeoman is 127.0.0.1 (localhost)
};