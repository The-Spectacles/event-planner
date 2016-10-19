'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const getMyRsvps = () => {
  event.preventDefault();
    api.getMyRsvps()
      .done(ui.myRsvpsSuccess)
      .fail(ui.failure);
};

const onCreateRsvp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  let questionsArray = [];
  questionsArray.push(data.rsvp.questions);
  data.rsvp.questions = questionsArray;
  api.createRsvp(data)
    .done(() => {
      ui.createRsvpSuccess();
      getMyRsvps();
    })
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
