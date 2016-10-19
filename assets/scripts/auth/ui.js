'use strict';

const app = require('../app');

const profileEvents = require('../profile/events');

const failure = () => {
  $('.message').html('<p>Oops! Try again.</p>');
  $('.message').children().delay(3000).fadeToggle('slow');
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.nav').removeClass('hide');
  $('.container-fluid').removeClass('image-background');
  profileEvents.buildProfile();
  $('.main').removeClass('white-box');


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
  $('.message').html('<p>Password changed successfully.</p>');
  $('.message').children().delay(3000).fadeToggle('slow');
  profileEvents.buildProfile();
};

const signOutSuccess = () => {
  app.user = null;
  $('.nav').addClass('hide');
  const homepage = require('../templates/homepage/container.handlebars');
  $('.interface').html(homepage);
  $('.container-fluid').addClass('image-background');
  $('.main').addClass('white-box');

};

const togglePasswordForm = () => {
  let passwordVisible = $('.interface').children('.pwd-form').length;
  if(passwordVisible) {
    profileEvents.buildProfile();
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
