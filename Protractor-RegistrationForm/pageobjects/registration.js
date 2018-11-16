const chai = require('chai');
chai.use(require('chai-smoothie'));

var RegistrationFormObject = function() {

	
	
  //TODO: Locate all elements
    var username = element(by.id('username'));
	var pwd = element(by.id('password'));
	var description = element(by.name('formly_1_input_username_0'));
	var btnLogin = element(by.buttonText('Login'));
	var logoutButton = element(by.linkText('Logout'));

  this.get = function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login')
  };
  this.enterUsername = function() {
	username.sendKeys('angular');
  };
  this.enterPassword = function() {
    pwd.sendKeys('password');
  };
  this.enterDescription = function() {
    description.sendKeys('My description');
  };
  this.clickLogin = function() {
	btnLogin.click();
  };
  this.verifySuccessfulLogin = function() {
    chai.assert.isNotNull(logoutButton, 'not logged in!');
  };
  this.clickLogout = function() {
    logoutButton.click();
  };
  this.verifySuccessfulLogout = function() {
    chai.assert.isNotNull(username, 'not logged out!')
  };
};
module.exports = RegistrationFormObject;