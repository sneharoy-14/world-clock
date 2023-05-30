function updateTime() {
  // Kolkata
  let kolkataElement = document.querySelector("#kolkata");
  let kolkataDateElement = kolkataElement.querySelector(".date");
  let kolkataTimeElement = kolkataElement.querySelector(".time");
  let kolkataTime = moment().tz("Asia/Kolkata");

  kolkataDateElement.innerHTML = moment().format("dddd D MMMM YYYY");
  kolkataTimeElement.innerHTML = kolkataTime.format("HH:mm:ss");

  // Istanbul
  let instanbulElement = document.querySelector("#istanbul");
  let instanbulDateElement = instanbulElement.querySelector(".date");
  let instanbulTimeElement = instanbulElement.querySelector(".time");
  let instanbulTime = moment().tz("Asia/Istanbul");

  instanbulDateElement.innerHTML = moment().format("dddd D MMMM YYYY");
  instanbulTimeElement.innerHTML = instanbulTime.format("HH:mm:ss");

  // Prague
  let pragueElement = document.querySelector("#prague");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = moment().format("dddd D MMMM YYYY");
  pragueTimeElement.innerHTML = pragueTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
