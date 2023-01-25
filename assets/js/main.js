import {apiKey} from "../../nothingToseeHere.js";
/* ========== input ========== */
/* ========== input ========== */
/* ========== input ========== */
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
/* ========== output ========== */
/* ========== output ========== */
/* ========== output ========== */
const location = document.getElementById("location");
const localTime = document.getElementById("localTime");
const temp = document.getElementById("temp");
const feelsLikeTemp = document.getElementById("feelsLikeTemp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const background = document.querySelector("#cardContainer");





/* ========== get data ========== */
/* ========== get data ========== */
/* ========== get data ========== */
let dataFetch = (cityName) =>{
    /* local time */
    /* temp */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => temp.innerHTML = ((data["current"].temp_c)));
    /* feels like temp */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => feelsLikeTemp.innerHTML = ((data["current"].feelslike_c)));
    /* humidity */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => humidity.innerHTML = ((data["current"].humidity)));
    /* wind speed */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => windSpeed.innerHTML = ((data["current"].wind_mph)));
    /* local time */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => localTime.innerHTML = ((data["current"].last_updated)));
}

searchButton.addEventListener('click', () => {
    let cityName = locationInput.value;
    location.innerHTML = cityName;
    console.log(cityName);
    dataFetch(cityName);
    background.style.backgroundImage=`url(https://source.unsplash.com/random/1920×1080/?${cityName})`;
});










