'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const app = require('../app');

// for getting all events (button)

const getAllEvents = function () {
  event.preventDefault();
    api.getAllEvents()
      .done(ui.allEventsSuccess)
      .fail(ui.failure);
};


// getting all events (profile)
const getMyEvents = function () {
  event.preventDefault();
    api.getMyEvents()
      .done(ui.myEventsSuccess)
      .fail(ui.failure);
};


// events

const addHandlers = () => {

  // for getting all events
 $('#get-all-events').on('click', getAllEvents);
 $('#get-my-events').on('click', getMyEvents);


 };

module.exports = {
  addHandlers,
};
