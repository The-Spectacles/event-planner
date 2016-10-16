'use strict';

// const app = require('../app');

const showAllListsTemplate = require('../templates/get-all-lists.handlebars');
const showNewListTemplate = require ('../templates/single-list-view.handlebars');

// for getting all lists

const myListsSuccess = (data) => {
//  console.log('list success data is', data);
  let lists = data;
//   console.log(lists);
  $(".content").html(showAllListsTemplate(lists));
};

// for getting a single list (show)

const singleListSuccess = (data) => {
//  console.log('list success data is', data);
  let list = data.list;
//   console.log('list is', list);
  $(".content").html(showNewListTemplate(list));
};

// for creating a list

// const proceedToCreateList = () => {
//   $('#new-list-form').removeClass('hide');
// };

// for updating a list title

const proceedToUpdateList = () => {
    // $(".content").html(showModalTemplate(list_id));
    // $('#editTitleModal').modal('show');
};

const showUpdatedList = (data) => {
  let updatedList = data.list;
//  $('#update-list-form').addClass('hide');
  $(".content").html(showNewListTemplate(updatedList));
};

const failure = () => {
  $('.pw-error').removeClass('hide');
  setTimeout(function() {
   $('.pw-error').fadeOut();
 }, 800);
};

const clearMyLists = () => {
  event.preventDefault();
  //console.log('clearMyLists is running');
  $(".content").html("");
//  $('#update-list-form').addClass('hide');
};

module.exports = {
//  proceedToCreateList,
  myListsSuccess,
  failure,
  proceedToUpdateList,
  showUpdatedList,
  clearMyLists,
  singleListSuccess
};
