function updateTime() {
  // Kolkata
  let kolkataElement = document.querySelector("#kolkata");
  if (kolkataElement) {
    let kolkataDateElement = kolkataElement.querySelector(".date");
    let kolkataTimeElement = kolkataElement.querySelector(".time");
    let kolkataTime = moment().tz("Asia/Kolkata");

    kolkataDateElement.innerHTML = moment().format("dddd D MMMM YYYY");
    kolkataTimeElement.innerHTML = kolkataTime.format("HH:mm:ss");
  }
  // Istanbul
  let instanbulElement = document.querySelector("#istanbul");
  if (instanbulElement) {
    let instanbulDateElement = instanbulElement.querySelector(".date");
    let instanbulTimeElement = instanbulElement.querySelector(".time");
    let instanbulTime = moment().tz("Asia/Istanbul");

    instanbulDateElement.innerHTML = moment().format("dddd D MMMM YYYY");
    instanbulTimeElement.innerHTML = instanbulTime.format("HH:mm:ss");
  }
  // Prague
  let pragueElement = document.querySelector("#prague");
  if (pragueElement) {
    let pragueDateElement = pragueElement.querySelector(".date");
    let pragueTimeElement = pragueElement.querySelector(".time");
    let pragueTime = moment().tz("Europe/Prague");

    pragueDateElement.innerHTML = moment().format("dddd D MMMM YYYY");
    pragueTimeElement.innerHTML = pragueTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === `current`) {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd D MMMM YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("HH:mm:ss")}</div>
</div>
<a href="index.html">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
