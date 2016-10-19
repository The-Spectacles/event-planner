'use strict';

 // const app = require('../app');
const formatDateTime = require('../../../lib/format-date-time');

const myRsvpsTemplate = require('../templates/rsvps/my-rsvps.handlebars');
const singleRsvpTemplate = require('../templates/rsvps/single-rsvp.handlebars');

const createRsvpSuccess = (data) => {
  console.log("inside createRsvpSuccess", data);
};

const myRsvpsSuccess = (data) => {
  console.log("inside createRsvpSuccess", data);
  data.rsvps = formatDateTime.formatDatesForDisplay(data.rsvps);
  $('.my-rsvps').html(myRsvpsTemplate(data));
};

const singleRsvpSuccess = (data) => {
  console.log('the single RSVP data is', data);
  data.rsvp = formatDateTime.trimDateAndTime(data.rsvp);
  if (data.rsvp.startTime) {
    data.rsvp.startTime = formatDateTime.convertClock(data.rsvp.startTime);
  }
  if (data.rsvp.endTime) {
    data.rsvp.endTime = formatDateTime.convertClock(data.rsvp.endTime);
  }
  let rsvp = data.rsvp;
  $('.interface').html(singleRsvpTemplate(rsvp));
};


module.exports = {
  createRsvpSuccess,
  myRsvpsSuccess,
  singleRsvpSuccess,
};
