"use strict";

//calling the api
const url = 'http://api.openweathermap.org/data/2.5/weather';
const weatherData = $.get(url);
$.get(url, {
    APPID: MY_WEATHER_ID,
    units: 'imperial',
    q:     "Salt Lake City, US"
}).done(function(data) {
    console.log(data);
});
$(document).ready(function(){
    weatherData.done(function(data){
        let weatherNow = "";
        let condition = data.currently;
        let temp = parseInt(data.currently.temperature);
        weatherNow += "<span class=\"interiortext\"> Today:</span>";
        weatherNow += "<span class=\"interiortext\"> Currently: " + temp + "°F</span>";
        weatherNow += "<span class=\"interiortext\">" + data.minutely.summary + "</span>";
    })
});
function currentWea(obj){
    let weatherNow = "";
    let condition = obj.currently;
    let temp = parseInt(obj.currently.temperature);
    weatherNow += '<div class=\"interiortext\"> Today:</div>';
    weatherNow += '<div class=\"interiortext\"> Current temperature: " + temp + "°F</div>';
    $('#today').html(weatherNow);
};

function tomWea (data){
    let hightemp = parseInt(data.daily.data[1].temperatureHigh);
    let lowtemp = parseInt(data.daily.data[1].temperatureLow);
    let weather2 = "";
    weather2 += "<div class =\"interiortext\">Tomorrow: </div>";
    weather2 += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
    $("#tomorrow").html(weather2);
};

function threeWea(data){
    let hightemp = parseInt(data.daily.data[1].temperatureHigh);
    let lowtemp = parseInt(data.daily.data[1].temperatureLow);
    let weather3 = "";
    weather3 += "<div class =\"interiortext\">Tomorrow: </div>";
    weather3 += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
    $("#tomorrow").html(weather3);
}
