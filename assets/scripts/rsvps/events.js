'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onCreateRsvp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("onCreateRsvp Data is ", data);
  let questionsArray = [];
  questionsArray.push(data.rsvp.questions);
  console.log(questionsArray);
  data.rsvp.questions = questionsArray;
  console.log("Data after formatting &&&", data);
  console.log('improved', data);
  api.createRsvp(data)
    .done(ui.createRsvpSuccess)
    .fail(ui.failure);
};

const getMyRsvps = () => {
  event.preventDefault();
  console.log("INSIDE getMyRsvps ********");
    api.getMyRsvps()
      .done(ui.myRsvpsSuccess)
      .fail(ui.failure);
};

const onShowRsvp = (event) => {
  event.preventDefault();
  let rsvpId = $(event.target).attr('data-id');
  api.getOneRsvp(rsvpId)
    .done(ui.singleRsvpSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.interface').on('submit','#create-rsvp', onCreateRsvp);
  $('.interface').on('click', '#get-my-rsvps', getMyRsvps);
  $('.interface').on('click', '.show-rsvp', onShowRsvp);
};

module.exports = {
  addHandlers,
  getMyRsvps,
};
