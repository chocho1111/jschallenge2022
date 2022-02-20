const API_KEY = "36c500bb57907c66f21374dfb338ffcc";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector(".weather-box span:first-child");
        weatherContainer.innerText = `${data.weather[0].main} | ${data.main.temp}`;

    })
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);