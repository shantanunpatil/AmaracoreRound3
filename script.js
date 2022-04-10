//Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let hrs = document.getElementById("hrs");

submit.addEventListener("click", () => {
  //Create a Date object from input value
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);

  //Check if the input dates are valid
  //If valid calculate the difference
  if (date1.getTime() && date2.getTime()) {
    //Calculate difference in time using getTime function
    //getTime calculates number of years since January 1,1970
    let timeDifference = date2.getTime() - date1.getTime();

    //Since this value is in milliseconds we need to convert it into days
    //We want the difference to be a non-negative number. Hence we use Math.abs()
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
    let hours = Math.abs((timeDifference / (1000 * 60 * 60)) % 24);

    total_seconds = parseInt(Math.floor(timeDifference / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.abs(Math.floor(total_minutes / 60)));
    days = parseInt(Math.floor(total_hours / 24));

    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);

    output.innerHTML = `Difference between the two dates is <span>${days}</span> days`;
    hrs.innerHTML = `<span>${total_hours}</span> Hours <span>${total_minutes}</span> Minutes`;
  }

  //Else display that the input is valid
  else {
    output.innerHTML = "Please select a valid date";
  }
});