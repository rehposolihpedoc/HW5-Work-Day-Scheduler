
$(function () {
  function saveTask() {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    console.log("Saving");
    console.log("this is this")
    console.log($(this))
    var myKey = $(this).parent().attr('id')
    console.log("this is the key/parent")
    console.log(myKey);
   var valueToSave = $(this).siblings("textarea").val()
    console.log(valueToSave)
    //key
    //value
    localStorage.setItem(myKey, valueToSave)
  }
  $(".saveBtn").on("click", saveTask);
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  
  function checkPastPresentFuture() {
    var currentHour = new Date().getHours();
    console.log(currentHour);
  
    var currentTime = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
    console.log(currentTime);
  
    for (let i = 0; i < currentTime.length; i++) {
      const element = currentTime[i];
      var targetRow = $('<div>').addClass('description');
      console.log(targetRow);
  
      if (currentHour == element) {
        $(this).find("div.time-block").addClass("present");
      } else if (currentHour > element) {
        $(this).addClass("past");
      } else if (currentHour < element) {
        $(this).addClass("future");
      }
    }
  }
  $('.time-block').each(checkPastPresentFuture);
  //}
  /*$('.time-block').each(function checkPastPresentFuture(){
    var currentHour = new Date().getHours();
    console.log(currentHour);
   var currentTime = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
   console.log(currentTime);
  for (let i = 0; i < currentTime.length; i++) {
  const element = currentTime[i];
  var targetRow = $('<textarea>').createElement('<span>');
  console.log(targetRow);
  
  if (currentHour == currentTime) {
    $("textarea.description").toggleClass("present");
  } else if (currentTime > element) {
    $("div.time-block").toggleClass("past");
  } else if (currentTime < element) {
    $("div.time-block").toggleClass("future");
  }
};
   });
   */
    //console.log(currentHour);
    
    /*if (currentHour == "3PM") {
      $("div.time-block").css("background-color", "#ff6961");} else
      if (currentHour !== "3PM") {
        $("#hour-11").css("background-color", "#77dd77");}
  
     })
    /*{
      $("div.time-block").toggleClass("present");
    } else if (currentTime > currentTime) {
      $("div.time-block").toggleClass("past");
    } else if (currentTime < currentTime) {
      $("div.time-block").toggleClass("future");
    }*/
    
 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  document.getElementById("currentDay").innerText =
    dayjs().format("MMMM-DD-YYYY");
});

/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/
