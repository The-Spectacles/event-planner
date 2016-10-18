'use strict';

 const app = require('../app');

const showAllEventsTemplate = require ('../templates/events/all-events.handlebars');
const showSingleEventTemplate = require('../templates/events/single-event.handlebars');
const showEditFormTemplate = require('../templates/events/edit-event.handlebars');
const showMyEventsTemplate = require ('../templates/events/my-events.handlebars');
const showRsvpViewTemplate = require('../templates/rsvps/rsvp-view.handlebars');


// convert from 24 hour clock to 12 hour clock
const formatAmAndPm = (time) => {
  // time comes in as '17:30'
  // using .substring to get the first two digits (the hour)
  // if it's less than 12, add " AM" to make the time "08:30 AM"
  if (time.substring(0,2) < 12) {
    return time += ' AM';
  } else {
    // get the hour
    let oldHour = time.substring(0,2);

    // subtract 12 from the hour so '17' becomes '5'
    let newHour = parseInt(oldHour, 10) - 12;
    console.log(newHour);

    // replace the 24-hour version of the hour with the 12-hour version
    time = time.replace(oldHour, newHour);

    // add a 0 to the beginning so '5' becomes '05'
    if (newHour < 10) {
      time = `0${time}`;
    }
    console.log('PM time is', time);
    // add " PM" to make the time "05:30 PM"
    return time += ' PM';
  }
};

const formatTimeAndDate = (data) => {
  // date and time both come in from API as '2016-10-20T12:30:00'
  // .split('T') turns it into ['2016-10-20', '12:30:00']
  // taking the first element of that array gets us a nicely formatted data
  data.event.date = data.event.date.split('T')[0];

  // taking the second element gets us the time as '12:30:00'
  // .substring(0, 5) will start at the first character of that string
  // and return 5 total characters: '12:30' (four digits plus the colon)
  // using the formatTime function above to make the time pretty
  if(data.event.startTime) {
    data.event.startTime = data.event.startTime.split('T')[1].substring(0, 5);
  }
  if (data.event.endTime) {
    data.event.endTime = data.event.endTime.split('T')[1].substring(0, 5);
  }

  return data;
};


// for getting all events
const allEventsSuccess = (data) => {
  console.log('event success data is', data);
  data.events.forEach((event) => {
    event.date = event.date.split('T')[0];
  });
  let allEvents = data;

  $(".events-list").html(showAllEventsTemplate(allEvents));
};


// for showing a single event
const singleEventSuccess = (data) => {
  console.log('single event success data is', data);
  data = formatTimeAndDate(data);
  if (data.event.startTime) {
    data.event.startTime = formatAmAndPm(data.event.startTime);
  }
  if (data.event.endTime) {
    data.event.endTime = formatAmAndPm(data.event.endTime);
  }
  // we need to get the counts of rsvps. loop through each rsvp to see if yes, no, or maybe
  let yes = 0;
  let no = 0;
  let maybe = 0;

  data.event.rsvps.forEach((rsvp) => {
    if(rsvp.questions[0].options === 'Yes') {
      yes++;
    }
    else if(rsvp.questions[0].options === 'No') {
      no++;
    }
    else if(rsvp.questions[0].options === 'Maybe') {
      maybe++;
    }
  //  console.log('rsvp is', rsvp.questions[0].options);
  });
    console.log("yes is", yes, "no is", no, "maybe is", maybe);

  let event = data.event;
  event.yes = yes;
  event.no = no;
  event.maybe = maybe;

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
  data.events.forEach((event) => {
    event.date = event.date.split('T')[0];
  });
  let myEvents = data;
  $(".events-list").html(showMyEventsTemplate(myEvents));
};

const createEventSuccess = () => {
  console.log('event created successfully!!');
};

// show edit form
const editFormSuccess = (data) => {
  console.log('single event success data is', data);
  data = formatTimeAndDate(data);
  console.log(data);
  let event = data.event;
  $(".single-event").html(showEditFormTemplate(event));
};

const deleteEventSuccess = () => {

  // show profile view
console.log('event deleted successfully!!');
};

module.exports = {
//  proceedToCreateList,
  allEventsSuccess,
  myEventsSuccess,
  createEventSuccess,
  singleEventSuccess,
  editFormSuccess,
  deleteEventSuccess,
  // failure,
  // proceedToUpdateList,
  // showUpdatedList,
  // clearMyLists,
  // singleListSuccess
};
