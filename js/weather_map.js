"use strict";

// $.ajax('url', {data}).done(function(data){
//     // access to data
// }).fail(function(err){
//     console.log(err)
// })

//calling the api
const url = 'http://api.openweathermap.org/data/2.5/weather?&appid='+MY_WEATHER_ID;

const getWeatherData = $.ajax(url, {data: {units: 'imperial', q: 'Salt Lake City'}}).done(function(data){
    let temp = parseInt(data.main.temp);
    let high = parseInt(data.main.temp_max);
    console.log(data);
    $('#today').text('Current Temperature: '  + temp);
    $('.list1-item1').text(high);
});

//console.log(getWeatherData);
// setting up the function (async) that will making a request to the API (eventually we'll pass in the city)
//const getWeatherData = async (city) => {

    // making a GET req to the openweathermap aip
    //const data = await $.get(url, {
     //   units: 'imperial',
     //   q: 'Salt Lake City'
    //});
    //console.log(data);

    // use data to be input into a card
    // select (grab) existing cards using jquery
    // access the temps you need from the data

    // append the temps to existing cards
    //



    //$('#city_name').text(data.name);
    //return data;
//}
//$(document).ready(function(data){
    //getWeatherData(function(data){
    //    console.log(data);
    //    let weatherNow = "<h1>wowee</h1>";
    //    let temp = parseInt(data.main.temp);
    //    weatherNow += "<div> Today:</div>";
    //    weatherNow += "<div> Currently: " + temp + "°F</div>";
    //});
    //$(document.body).createElement(weatherNow);
// });
