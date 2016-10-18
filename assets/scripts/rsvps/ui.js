'use strict';

 // const app = require('../app');

 const myRsvpsTemplate = require('../templates/rsvps/my-rsvps.handlebars');

const createRsvpSuccess = (data) => {
  console.log("inside createRsvpSuccess", data);
};

const myRsvpsSuccess = (data) => {
  console.log("inside createRsvpSuccess", data);
  $('.my-rsvps').html(myRsvpsTemplate(data));
};



module.exports = {
  createRsvpSuccess,
  myRsvpsSuccess,
};
