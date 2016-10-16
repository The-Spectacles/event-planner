'use strict';

const app = require('../app');


// get all events

const getAllEvents = () => {
  return $.ajax({
    url: app.host + '/events',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// show an event

const getOneEvent = () => {
return $.ajax ({
    url: app.host + '/events/' + app.event.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// create new event

const createNewEvent = (data) => {
  return $.ajax({
    url: app.host + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
};

// edit an event

const updateEvent = (data) => {
  return $.ajax({
    url: app.host + '/events/' + app.data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: data,
  });
  };


// delete an event

const destroyEvent = (data) => {
return $.ajax ({
    url: app.host + '/events/' + app.data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createNewEvent,
  updateEvent,
  destroyEvent
};
