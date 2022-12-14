// NOTE: jQuery juice = enabled;
// NOTE: bootstrap juice = enabled;
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // moment.js
    // format full day, month day
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// handle displaying the time
timeDisplayEl = $('#currentDay');

timeBlocks = [
    $('#09'),
    $('#10'),
    $('#11'),
    $('#12'),
    $('#13'),
    $('#14'),
    $('#15'),
    $('#16'),
    $('#17'),
];

// test display element targets

function displayTest(temp) {

    console.log(timeBlocks[0]);
    console.log(timeBlocks[1]);
    console.log(timeBlocks[2]);
    console.log(timeBlocks[3]);
    console.log(timeBlocks[4]);
    console.log(timeBlocks[5]);
    console.log(timeBlocks[6]);
    console.log(timeBlocks[7]);
    console.log(timeBlocks[8]);
}



function dayAndDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
}

function timeChecker() {
    var currentHour = moment().format('kk');
    console.log(currentHour);
    for (i=0; i < timeBlocks.length; i++) {
        if (currentHour < timeBlocks[i]) {

            
        }
    }
}

setInterval(dayAndDate, 1000);

// Use localStorage.getItem(key) to read data in local storage.
var task = localStorage.getItem('task');
var saveBtn = function(el, ) {

};

// If this is the first time user has visited, then count will be null.
if (task === null) {
  task.textContent = "";
}

// render the retrieved count in HTML using the textContent property
counter.textContent = count;

addButton.addEventListener('click', function () {


    // Use localStorage.setItem(key, value) to add/change the data in local
    // storage
    localStorage.setItem('count', task);
  }
);

// var container = $('.container');
// container.on('click', '.btn', function (event) {
//     console.log(event.target);
//     console.log($(event.target).siblings());
// });
