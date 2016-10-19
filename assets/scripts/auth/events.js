'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = (event) => {
  event.preventDefault();
  let signUpData = getFormFields(event.target);
  api.signUp(signUpData)
    .done(function (data, textStatus, jqXHR) {
      api.signIn(data, textStatus, jqXHR, signUpData)
        .done(ui.signInSuccess)
        .fail(ui.failure);
    })
    .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  console.log('clicked sign out');
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.passwordChangeSuccess)
    .fail(ui.failure);
};

const onShowAuth = () => {
  event.preventDefault();
  let authForm = '';
  if ($(event.target).hasClass('sign-up')) {
    authForm = 'sign-up';
  } else if ($(event.target).hasClass('sign-in')) {
    console.log('clicked on sign in link');
    authForm = 'sign-in';
  }
  ui.showAuthForms(authForm);
};

const onTogglePasswordForm = (event) => {
  event.preventDefault();
  ui.togglePasswordForm();
};

const addHandlers = () => {
  $('.interface').on('submit', '#sign-up', onSignUp);
  $('.interface').on('submit', '#sign-in', onSignIn);
  $('.nav').on('click', '#sign-out', onSignOut);
  $('.nav').on('click', '#change-pw', onTogglePasswordForm);
  $('.interface').on('submit', '#change-password', onChangePassword);
  $('.interface').on('click', '.sign-in', onShowAuth);
  $('.interface').on('click', '.sign-up', onShowAuth);
};

module.exports = {
  addHandlers,
};