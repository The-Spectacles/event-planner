'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const app = require('../app');

// for getting all events

const getMyEvents = function () {
  event.preventDefault();
    api.getAllLists()
      .done(ui.myListsSuccess)
      .fail(ui.failure);
};

//  for showing a event list

//  for creating a new list

//  for creating a new list (in my list view)

// for updating a list title

// for deleting an event


// events

const addHandlers = () => {

  // for getting all events
  $('#my-lists-button').on('click', getMyEvents);

 };
