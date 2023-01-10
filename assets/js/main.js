/* ========== input ========== */
let locationInput = document.getElementById("locationInput");
let city;
let search = () =>{
    city = locationInput.value;
    console.log(city);
}

/* ========== get data ========== */

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(response => response.json())
    .then(data => document.querySelector(".temperature").innerHTML = (data["current"].temp_c));