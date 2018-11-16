const RegistrationForm = require('../pageobjects/registration.js');

describe('Register to Way2automation\n', function() {

  //TODO: Create an instance of registration class
  var regForm = new RegistrationForm();

  it("Should navigate to Way2automation webpage ",function () {
	regForm.get();
  });
  it("Should fill out the registration form",function () {
	regForm.enterUsername();
	regForm.enterPassword();
	regForm.enterDescription();
  });
  it("Should click on login button",function () {
	regForm.clickLogin();
  });
  it("Should verify that the user is successfully logged in",function () {
	regForm.verifySuccessfulLogin();
  });
  it("Should click on logout button",function () {
	regForm.clickLogout();
  });
  it("Should verify that the user is successfully logged out",function () {
	regForm.verifySuccessfulLogout();
  });

});