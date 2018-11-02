const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["../specs/registration-specs.js"],

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({}));
  },
};