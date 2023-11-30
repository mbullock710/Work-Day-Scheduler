  // Wraps all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.

$(function () {

  // Adds listener for click events on the save button to save event time and event description in local storage

  $('.btn').on('click', function() {

    const eventTime = $(this).closest('.time-block').attr('id');
    const eventInput = $(this).siblings('.description').val();

    localStorage.setItem(eventTime, eventInput);
  
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const currentHour = dayjs().hour();

  $('.time-block').each(function() {

    const timeBlock = $(this).closest('.time-block').attr('id');
    
    if (timeBlock < currentHour) {
      $(this).addClass('past');
    } else if (timeBlock === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // Displays the current date in the header of the page
  
  const currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);

});
