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
  api.signOut()
    .done(ui.success)
    .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.auth').on('submit', '#sign-up', onSignUp);
  $('.auth').on('submit', '#sign-in', onSignIn);
  $('.auth').on('click', '#sign-out', onSignOut);
  $('.auth').on('submit', '#change-password', onChangePassword);
};

module.exports = {
  addHandlers,
};