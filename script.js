const currentTime = new Date();
console.log(currentTime)
function theClock() {

  //added the day of the week with a varible connected to a function with an array list of items
  const day = daySelector(currentTime.getDay());

  //Created Month & Year varible but now fuctions must be created to connect 
  /*
  const month;
  const year; 
  */

  const dateDisplay = document.getElementById('date-display');
  dateDisplay.textContent = `Today is` + ` ${day}`
}
theClock();


function daySelector(index) {
  const days = [ 
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[index];
}

