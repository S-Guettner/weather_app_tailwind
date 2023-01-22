import {apiKey} from "../../nothingToseeHere.js";
/* ========== input ========== */


let locationInput = document.getElementById("locationInput");
let searchButton = document.getElementById("searchButton");

/* let cityName = "madrid"; */

searchButton.addEventListener('click', () => {
    let cityName = locationInput.value ;
    console.log(cityName);

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log((data["current"].temp_c)));

});





/* ========== get data ========== */



