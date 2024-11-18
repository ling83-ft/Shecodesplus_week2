function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss"
    )} <small>${losAngelesTime.format("A")}</small>`;
  }
  //Paris

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm:ss"
    )} <small>${parisTime.format("A")}</small>`;
  }
}
function updateCity(event) {
  let cityTimeZone;
  if (event) {
    cityTimeZone = event.target.value;
  } else {
    let selectElement = document.querySelector("#city");
    cityTimeZone = selectElement.value;
  }

  if (cityTimeZone.length > 0) {
    debugger;
    let cityName;
    if (cityTimeZone.includes("/")) {
      cityName = cityTimeZone.replace("_", " ").split("/")[1];
    } else {
      cityName = cityTimeZone.replace("_", " ");
    }

    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}  <small>${cityTime.format("A")}</small></div>
    </div>`;
  } else {
    updateTime();
  }
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

setInterval(updateCity, 1000);
