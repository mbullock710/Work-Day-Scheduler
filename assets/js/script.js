// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // Adds listener for click events on the save button to save event time and event description in local storage

  $('.saveBtn').on('click', function () {

    const eventTime = $(this).closest('.time-block').attr('id');
    const eventInput = $(this).siblings('.description').val();

    localStorage.setItem(eventTime, eventInput);

  });

  // Adds code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  const currentHour = dayjs().hour();

  $('.time-block').each(function () {

    const timeId = $(this).attr('id');

    if (timeId < currentHour) {
      $(this).addClass('past');
    } else if (timeId === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

    // Code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements

    const savedInput = localStorage.getItem(timeId)
    if (savedInput) {
      $(this).find('textarea').val(savedInput);
    }

  });

  // Displays the current date in the header of the page

  const currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);

});
