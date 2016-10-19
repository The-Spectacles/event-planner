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

// show event create form
const showEventForm = function (event) {
  event.preventDefault();
  ui.showEventFormSuccess();
};

// create an event
const createEvent = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.event = formatDateTime.formatTimeForMongo(data.event);
  api.createNewEvent(data)
    .done(ui.createEventSuccess)
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
  data.event = formatDateTime.formatTimeForMongo(data.event);
  api.updateEvent(data)
    .done(ui.singleEventSuccess)
    .fail(ui.failure);
};

const deleteEvent = (event) => {
  event.preventDefault();
  let eventId = $(event.target).attr('data-id');
    api.deleteEvent(eventId)
      .done(() => {
        ui.deleteEventSuccess();
        getMyEvents();
      })
      .fail(ui.failure);
};

// events

const addHandlers = () => {
  $('.container-fluid').on('click', '.get-all-events', getAllEvents);
  $('#get-my-events').on('click', getMyEvents);
  $('.container-fluid').on('click', '.show-event-form', showEventForm);
  $('.interface').on('submit', '#create-event-form', createEvent);
  $('.interface').on('click','.show-event', showSingleEvent);
  $('.interface').on('click','.update-event', getEditForm);
  $('.interface').on('submit','#update-event-form', updateEvent);
  $('.interface').on('click','.delete-event', deleteEvent);
  $('.interface').on('click','.update-rsvp', showSingleEvent);
};

module.exports = {
  addHandlers,
  getMyEvents,
};
