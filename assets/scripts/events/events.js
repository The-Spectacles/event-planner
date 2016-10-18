'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const formatDateTime = require('../../../lib/format-date-time');

const api = require('./api');
const ui = require('./ui');

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

// show one event
const showSingleEvent = function (event) {
  event.preventDefault();
  let eventId = $(event.target).attr('data-id');
    api.getOneEvent(eventId)
      .done(ui.singleEventSuccess)
      .fail(ui.failure);
};

// create an event
const createEvent = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  data = formatDateTime.formatTimeForMongo(data);
  console.log('improved', data);
  api.createNewEvent(data)
    .done(ui.createEventsSuccess)
    .fail(ui.failure);
};


// show the edit form
const getEditForm = function (event) {
  event.preventDefault();
  let eventId = $(event.target).attr('data-id');
    api.getOneEvent(eventId)
      .done(ui.editFormSuccess)
      .fail(ui.failure);
};

// editing an event
const updateEvent = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data = formatDateTime.formatTimeForMongo(data);
  api.updateEvent(data)
    .done(ui.singleEventSuccess)
    .fail(ui.failure);
};

const deleteEvent = (event) => {
  event.preventDefault();
  let eventId = $(event.target).attr('data-id');
    api.deleteEvent(eventId)
      .done(ui.deleteEventSuccess)
      .fail(ui.failure);
};

// events

const addHandlers = () => {

  // for getting all events
 $('#get-all-events').on('click', getAllEvents);
 $('#get-my-events').on('click', getMyEvents);
 $('#create-event-form').on('submit', createEvent);
 $('.events').on('click','.show-event', showSingleEvent);
 $('.events').on('click','.update-event', getEditForm);
 $('.events').on('submit','#update-event-form', updateEvent);
 $('.events').on('click','.delete-event', deleteEvent);
 $('.rsvps').on('click','.update-rsvp', showSingleEvent);
 };

module.exports = {
  addHandlers,
};
