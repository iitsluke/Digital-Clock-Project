const currentTime = new Date();
console.log(currentTime)
function theClock() {
  const day = daySelector(currentTime.getDay());
  const month = monthSelector(currentTime.getMonth());
  const year = currentTime.getFullYear();
  //Completed date with day, month, & year with named variables with connection to its functions 

  const dateDisplay = document.getElementById('date-display');
  dateDisplay.textContent = `Today is` + ` ${day}` + `, ` + ` ${month}` + `, ` + ` ${year}`
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

function monthSelector(index) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return month[index];
}
