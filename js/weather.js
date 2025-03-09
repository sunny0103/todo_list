const API_KEY = "39317f4db71f85f7e9e36b3bb7727f43";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then((data) =>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} ${data.main.temp} °C`;
    });
}

function onGeoError(){
    alert("Can't find your location. Sorry No weather information for you." );
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);