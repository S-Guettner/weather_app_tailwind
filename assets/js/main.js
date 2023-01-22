import {apiKey} from "../../nothingToseeHere.js";
/* ========== input ========== */
/* ========== input ========== */
/* ========== input ========== */
let locationInput = document.getElementById("locationInput");
let searchButton = document.getElementById("searchButton");
/* ========== output ========== */
/* ========== output ========== */
/* ========== output ========== */
let location = document.getElementById("location");
let localTime = document.getElementById("localTime");
let temp = document.getElementById("temp");
let feelsLikeTemp = document.getElementById("feelsLikeTemp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");





/* ========== get data ========== */
/* ========== get data ========== */
/* ========== get data ========== */
let dataFetch = (cityName) =>{
    /* local time */
    /* temp */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log((data["current"].temp_c)));
    /* feels like temp */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log((data["current"].feelslike_c)));
    /* humidity */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log((data["current"].humidity)));
    /* wind speed */
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log((data["current"].wind_mph)));
}

searchButton.addEventListener('click', () => {
    let cityName = locationInput.value ;
    console.log(cityName);
    dataFetch(cityName);
});










