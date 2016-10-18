'use strict';

 // const app = require('../app');

const myRsvpsTemplate = require('../templates/rsvps/my-rsvps.handlebars');
const singleRsvpTemplate = require('../templates/rsvps/single-rsvp.handlebars');

const createRsvpSuccess = (data) => {
  console.log("inside createRsvpSuccess", data);
};

const myRsvpsSuccess = (data) => {
  console.log("inside createRsvpSuccess", data);
  $('.my-rsvps').html(myRsvpsTemplate(data));
};

const singleRsvpSuccess = (data) => {
  console.log('the single RSVP data is', data);
  let rsvp = data.rsvp;
  $('.single-rsvp').html(singleRsvpTemplate(rsvp));
};


module.exports = {
  createRsvpSuccess,
  myRsvpsSuccess,
  singleRsvpSuccess,
};
