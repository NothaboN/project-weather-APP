let now = new Date();
let p = document.querySelector("#day-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

p.innerHTML = `${day} ${hours}:${minutes}`;

function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("#name-city");
  h1.innerHTML = `${searchInput.value}`;
  showCity(searchInput.value);
}

let cityName = document.querySelector("#search-city");
cityName.addEventListener("click", city);

//WEEK 5

function showCity(city) {
  let apiKey = "ee4ee350fa54faef06893e12edc706a5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee4ee350fa54faef06893e12edc706a5&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let text = `${temperature}°C`;
  let h2 = document.querySelector("#temp");
  h2.innerHTML = text;
}
