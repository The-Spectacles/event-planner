'use strict';

const auth = require('./templates/auth/container.handlebars');
const events = require('./templates/events/container.handlebars');
const rsvps = require('./templates/rsvps/container.handlebars');

const authEvents = require('./auth/events.js');

const eventEvents = require('./events/events.js');

// On document ready(when the page loads)
$(() => {
  $('.auth').html(auth);
  $('.events').html(events);
  $('.rsvps').html(rsvps);

  // Here, we're running the add handlers from the appropriate files
  // so that they have access to them.
  authEvents.addHandlers();
  eventEvents.addHandlers();
});
