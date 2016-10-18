'use strict';

const formatDatesForDisplay = (data) => {
  data.forEach((event) => {
    event.date = event.date.split('T')[0];
  });
  return data;
};

const formatTimeForMongo = (event) => {
  // this is string interpolation using "template literals"
  // same as event.data + 'T' + event.startTime + ':00'
  if (event.startTime) {
    event.startTime = `${event.date}T${event.startTime}:00`;
  }
  if (event.endTime) {
    event.endTime = `${event.date}T${event.endTime}:00`;
  }
  return event;
};


// convert from 24 hour clock to 12 hour clock
const convertClock = (time) => {
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

const trimDateAndTime = (event) => {
  // date and time both come in from API as '2016-10-20T12:30:00'
  // .split('T') turns it into ['2016-10-20', '12:30:00']
  // taking the first element of that array gets us a nicely formatted data
  event.date = event.date.split('T')[0];

  // taking the second element gets us the time as '12:30:00'
  // .substring(0, 5) will start at the first character of that string
  // and return 5 total characters: '12:30' (four digits plus the colon)
  // using the formatTime function above to make the time pretty
  if(event.startTime) {
    event.startTime = event.startTime.split('T')[1].substring(0, 5);
  }
  if (event.endTime) {
    event.endTime = event.endTime.split('T')[1].substring(0, 5);
  }

  return event;
};

module.exports = {
  formatDatesForDisplay,
  formatTimeForMongo,
  convertClock,
  trimDateAndTime,
};

