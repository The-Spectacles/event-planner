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

module.exports = {
  success,
  failure,
  signInSuccess,
};