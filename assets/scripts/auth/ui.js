'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  console.log('signed in!');
  app.user = data.user;
  success(data);
};

const showAuthForms = (authForm) => {
  if (authForm === 'sign-up') {
    const signUpForm = require('../templates/auth/sign-up.handlebars');
    $('.interface').html(signUpForm);
  } else if (authForm === 'sign-in') {
    const signInForm = require('../templates/auth/sign-in.handlebars');
    $('.interface').html(signInForm);
  }
};

module.exports = {
  success,
  failure,
  signInSuccess,
  showAuthForms,
};