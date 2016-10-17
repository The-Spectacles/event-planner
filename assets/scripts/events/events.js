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

const createEvent = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
    api.createNewEvent(data)
      .done(ui.createEventsSuccess)
      .fail(ui.failure);
};


// events

const addHandlers = () => {

  // for getting all events
 $('#get-all-events').on('click', getAllEvents);
 $('#get-my-events').on('click', getMyEvents);
 $('#create-event-form').on('submit', createEvent);



 };

module.exports = {
  addHandlers,
};
