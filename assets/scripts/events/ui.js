'use strict';

const formatDateTime = require('../../../lib/format-date-time');

const app = require('../app');

const showAllEventsTemplate = require ('../templates/events/all-events.handlebars');
const showSingleEventTemplate = require('../templates/events/single-event.handlebars');
const showEditFormTemplate = require('../templates/events/edit-event.handlebars');
const showMyEventsTemplate = require ('../templates/events/my-events.handlebars');
const showRsvpViewTemplate = require('../templates/rsvps/rsvp-view.handlebars');
const showCreateEventTemplate = require('../templates/events/create-event.handlebars');

// for getting all events
const allEventsSuccess = (data) => {
  console.log('event success data is', data);
  data.events = formatDateTime.formatDatesForDisplay(data.events);
  let allEvents = data;
  $(".interface").html(showAllEventsTemplate(allEvents));
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
    // for each question, add the question text as a property key on responses
    // the value of that property is an empty array, which will hold the answer objects
    responses[question.text] = [];

    // for each option, set up an object that looks like: { "Yes": 0 }
    // push that option into the array we set up above
    question.options.forEach((option) => {
      let answer = {};
      answer[option] = 0;
      responses[question.text].push(answer);
    });

    // the end result looks like:

    // responses = {
    //   "Are you coming?": [
    //     { "Yes": 0 },
    //     { "No": 0 },
    //     { "Maybe": 0 },
    //   ],
    // };

  });

  console.log('responses for this event', responses);

  if(data.event.rsvps) {
    // loop through each of the rsvps
    data.event.rsvps.forEach((rsvp) => {
      // loop through each question/answer in the rsvp
      rsvp.questions.forEach((question) => {
        // find the appropriate question in the responses object and go through all of the possible answers
        responses[question.text].forEach((option) => {
          // if there's a match between the response in the RSVP and the answer option, increment the count
          // so if the rsvp is "Yes" for "Are you coming?"
          // then change tha answer option inside of the responses object for that question
          // to { "Yes": 1 }
          if (option.hasOwnProperty(question.options)) {
            option[question.options] = option[question.options] + 1;
          }
        });
      });
    });
  }
  
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

  // add the responses object to the event data so we can use it in handlebars
  event.responses = responses;

  console.log('formatted event data', event);
  // if the event owner id and the user id match show single event view otherwise
  // show rsvp view
    if (event._owner === app.user._id) {
      $(".interface").html(showSingleEventTemplate(event));
    }
    else {
    // we should think about what the main div is that we're filling up with content
      $(".interface").html(showRsvpViewTemplate(event));
    }
};

//show event create form
const showEventFormSuccess = () => {
  $(".interface").html(showCreateEventTemplate());
};

// for getting my events

const myEventsSuccess = (data) => {
  data.events = formatDateTime.formatDatesForDisplay(data.events);
  let myEvents = data;
  $(".events-list").html(showMyEventsTemplate(myEvents));
};

const createEventSuccess = (data) => {
  console.log('inside create event success', data);
  console.log('event created successfully!!');
  singleEventSuccess(data);
};

// show edit form
const editFormSuccess = (data) => {
  console.log('single event success data is', data);
  data.event = formatDateTime.trimDateAndTime(data.event);
  console.log(data);
  let event = data.event;
  $(".interface").html(showEditFormTemplate(event));
};

const deleteEventSuccess = () => {
  $('.message').html('<p>Event deleted successfully.</p>');
  $('.message').children().delay(3000).fadeToggle('slow');
  $('.interface').html('<div class="events-list"></div>');
};

const failure = () => {
  $('.message').html('<p>Oops! Try again.</p>');
  $('.message').children().delay(3000).fadeToggle('slow');
};

module.exports = {
  allEventsSuccess,
  myEventsSuccess,
  createEventSuccess,
  singleEventSuccess,
  editFormSuccess,
  deleteEventSuccess,
  showEventFormSuccess,
  failure,
};
