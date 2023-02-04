let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let todaysDate = days[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentTime = `${currentHours}:${currentMinutes}`;

document.querySelector("h2#date").innerHTML = todaysDate;
document.querySelector("h2#time").innerHTML = currentTime;

let cityInput = document.querySelector("#city-input");

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#tempFromApi").innerHTML = `${temperature}°C`;
}

function changeCity(event) {
  event.preventDefault();
  let city = (document.querySelector("#city").innerHTML = cityInput.value);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);
}

let cityForm = document.querySelector("#cityForm");
cityForm.addEventListener("submit", changeCity);
