'use strict';

const app = require('../app');

const failure = () => {
  $('.message').html('<p>Oops! Try again.</p>');
  $('.message').children().delay(3000).fadeToggle('slow');
};

const signInSuccess = (data) => {
  console.log('signed in!');
  app.user = data.user;
  console.log(data);
  $('.nav').removeClass('hide');
  $('.interface').html("Show profile view here");
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

const passwordChangeSuccess = () => {
  $('.interface').html("Show profile view here");
  $('.message').html('<p>Password changed successfully.</p>');
  $('.message').children().delay(3000).fadeToggle('slow');
};

const signOutSuccess = () => {
  console.log('signed out!');
  app.user = null;
  $('.nav').addClass('hide');
  const homepage = require('../templates/homepage/container.handlebars');
  $('.interface').html(homepage);
};

const togglePasswordForm = () => {
  let passwordVisible = $('.interface').children('.pwd-form').length;
  if(passwordVisible) {
    $('.interface').html("Show profile view here");
  } else {
    const passwordForm = require('../templates/auth/change-password.handlebars');
    $('.interface').html(passwordForm);
  }
};

module.exports = {
  failure,
  signInSuccess,
  showAuthForms,
  signOutSuccess,
  passwordChangeSuccess,
  togglePasswordForm,
};