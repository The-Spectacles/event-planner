'use strict';

const formatDateTime = require('../../../lib/format-date-time');

const app = require('../app');

const showAllEventsTemplate = require ('../templates/events/all-events.handlebars');
const showSingleEventTemplate = require('../templates/events/single-event.handlebars');
const showEditFormTemplate = require('../templates/events/edit-event.handlebars');
const showMyEventsTemplate = require ('../templates/events/my-events.handlebars');
const showRsvpViewTemplate = require('../templates/rsvps/rsvp-view.handlebars');

// for getting all events
const allEventsSuccess = (data) => {
  console.log('event success data is', data);
  data.events = formatDateTime.formatDatesForDisplay(data.events);
  let allEvents = data;
  $(".events-list").html(showAllEventsTemplate(allEvents));
};


// for showing a single event
const singleEventSuccess = (data) => {
  console.log('single event success data is', data);
  data.event = formatDateTime.trimDateAndTime(data.event);
  if (data.event.startTime) {
    data.event.startTime = formatDateTime.convertClock(data.event.startTime);
  }
  if (data.event.endTime) {
    data.event.endTime = formatDateTime.convertClock(data.event.endTime);
  }

  let responses = {};
  // loop through the event questions to find each question
  data.event.questions.forEach((question) => {
    //set up an empty "answers" object
    responses[question.text] = [];
    // let response = {
    //   questionText: question.text,
    //   questionOptions: [],
    // };

    question.options.forEach((option) => {
      let answer = {};
      answer[option] = 0;
      responses[question.text].push(answer);
    });

    // responses.push(response);

  });

  console.log('responses for this event', responses);

  data.event.rsvps.forEach((rsvp) => {
    rsvp.questions.forEach((question) => {
      // responses[question.text][question.options] = responses[question.text][question.options] + 1;
      responses[question.text].forEach((option) => {
        if (option.hasOwnProperty(question.options)) {
          option[question.options] = option[question.options] + 1;
        }
      });
    });
  });
  console.log('responses for this event', responses);
  // we need to get the counts of rsvps. loop through each rsvp to see if yes, no, or maybe
  // let yes = 0;
  // let no = 0;
  // let maybe = 0;

  // data.event.rsvps.forEach((rsvp) => {
  //   if(rsvp.questions[0].options === 'Yes') {
  //     yes++;
  //   }
  //   else if(rsvp.questions[0].options === 'No') {
  //     no++;
  //   }
  //   else if(rsvp.questions[0].options === 'Maybe') {
  //     maybe++;
  //   }
  // //  console.log('rsvp is', rsvp.questions[0].options);
  // });
  //   console.log("yes is", yes, "no is", no, "maybe is", maybe);

  let event = data.event;
  // event.yes = yes;
  // event.no = no;
  // event.maybe = maybe;

  event.responses = responses;

  console.log('formatted event data', event);
  // if the event owner id and the user id match show single event view otherwise
  // show rsvp view
    if (event._owner === app.user._id) {
      $(".single-event").html(showSingleEventTemplate(event));
    }
    else {
    // we should think about what the main div is that we're filling up with content
      $(".single-event").html(showRsvpViewTemplate(event));
    }
};

// for getting my events

const myEventsSuccess = (data) => {
  data.events = formatDateTime.formatDatesForDisplay(data.events);
  let myEvents = data;
  $(".events-list").html(showMyEventsTemplate(myEvents));
};

const createEventSuccess = () => {
  console.log('event created successfully!!');
};

// show edit form
const editFormSuccess = (data) => {
  console.log('single event success data is', data);
  data.event = formatDateTime.trimDateAndTime(data.event);
  console.log(data);
  let event = data.event;
  $(".single-event").html(showEditFormTemplate(event));
};

const deleteEventSuccess = () => {
  // show profile view
  console.log('event deleted successfully!!');
};

module.exports = {
  allEventsSuccess,
  myEventsSuccess,
  createEventSuccess,
  singleEventSuccess,
  editFormSuccess,
  deleteEventSuccess,
};
