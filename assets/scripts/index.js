'use strict';

// const auth = require('./templates/auth/container.handlebars');
// const events = require('./templates/events/container.handlebars');
// const rsvps = require('./templates/rsvps/container.handlebars');
const homepage = require('./templates/homepage/container.handlebars');

const authEvents = require('./auth/events.js');
const eventEvents = require('./events/events.js');
const rsvpEvents = require('./rsvps/events.js');
const profileEvents = require('./profile/events.js');

// On document ready(when the page loads)
$(() => {
  $('.interface').html(homepage);


  // Here, we're running the add handlers from the appropriate files
  // so that they have access to them.
  authEvents.addHandlers();
  eventEvents.addHandlers();
  rsvpEvents.addHandlers();
  profileEvents.addHandlers();
});
