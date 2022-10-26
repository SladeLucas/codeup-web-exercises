"use strict";

//calling the api
const url = 'http://api.openweathermap.org/data/2.5/weather';
$.get(url, {
    APPID: MY_WEATHER_ID,
    units: 'imperial',
    q:     "Salt Lake City, US"
}).done(function(data) {
    console.log(data);
});

function currentWea(obj){
    let weatherNow = "";
    let condition = obj.currently;
    let temp = parseInt(obj.currently.temperature);
    weatherNow += '<div class="card"> Current temperature: " + temp + "°F</div>';

}
