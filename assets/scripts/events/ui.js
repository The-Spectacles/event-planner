'use strict';

// const app = require('../app');

const showAllEventsTemplate = require ('../templates/events/all-events.handlebars');
const showSingleEventTemplate = require('../templates/events/single-event.handlebars');
const showEditFormTemplate = require('../templates/events/edit-event.handlebars');


// for getting all events
const allEventsSuccess = (data) => {
 console.log('event success data is', data);
   let allEvents = data;
//   console.log(lists);
   $(".all-events").html(showAllEventsTemplate(allEvents));
};

// for showing a single event
const singleEventSuccess = (data) => {
 console.log('single event success data is', data);
   let event = data.event;
//   console.log(lists);
   $(".single-event").html(showSingleEventTemplate(event));
};

// for getting my events

const myEventsSuccess = (data) => {
 console.log('event success data is', data);
  // let myEvents = data;
//   console.log(lists);
  // $(".events").html(showMyEventsTemplate(myEvents));
};

const createEventSuccess = () => {
console.log('event created successfully!!');
};

// show edit form
const editFormSuccess = (data) => {
 console.log('single event success data is', data);
   let event = data.event;
//   console.log(lists);
   $(".single-event").html(showEditFormTemplate(event));
};


// const failure = () => {
//   $('.pw-error').removeClass('hide');
//   setTimeout(function() {
//    $('.pw-error').fadeOut();
//  }, 800);
// };

// const clearMyLists = () => {
//   event.preventDefault();
//   //console.log('clearMyLists is running');
//   $(".content").html("");
// //  $('#update-list-form').addClass('hide');
// };

module.exports = {
//  proceedToCreateList,
  allEventsSuccess,
  myEventsSuccess,
  createEventSuccess,
  singleEventSuccess,
  editFormSuccess,
  // failure,
  // proceedToUpdateList,
  // showUpdatedList,
  // clearMyLists,
  // singleListSuccess
};
