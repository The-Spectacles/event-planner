'use strict';

const auth = require('./templates/auth/container.handlebars');

const events = require('./templates/events/container.handlebars');

const rsvps = require('./templates/rsvps/container.handlebars');

$(() => {
  $('.auth').html(auth);
  $('.events').html(events);
  $('.rsvps').html(rsvps);
});
