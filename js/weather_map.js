"use strict";

// $.ajax('url', {data}).done(function(data){
//     // access to data
// }).fail(function(err){
//     console.log(err)
// })
// Calling MapBox
mapboxgl.accessToken = MY_MAP_KEY;
let lngLat = {lng: -111.8911, lat: 40.7608}; // initial coordinates of SLC
let currentWeather = true;
let addressMarker = true;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: lngLat,
    zoom: 10
});

map.addControl(new mapboxgl.NavigationControl());

renderWeather(lngLat);
//map is loaded
//change weather data
$(`#fiveDayLocalForecast`).click(function(){
    currentWeather = !currentWeather;
    renderWeather(lngLat)
    if(currentWeather){
        $(`#fiveDayLocalForecast`).html(`Five Day Forecast`)
    } else {
        $(`#fiveDayLocalForecast`).html(`Current Weather`)
    }
});

function renderWeather(lngLat){
    // get location
    $.get("https://api.openweathermap.org/data/3.0/onecall", {
        APPID: MY_WEATHER_ID,
        lat:    lngLat.lat,
        lon:   lngLat.lng,
        units: "imperial"
    }).done(function(data){
        if(currentWeather) {
            let html = `
        <div class="card mx-auto w-50 d-flex bg-transparent border-0">
    
            <dl id="initialWeatherData" class="d-flex flex-column  flex-md-row align-items-center">
                <div class="row col-md">
                    <dt class="text-center">Temperature:</dt>
                    <dl class="text-center">${data.current.temp}<span>&#176;</span>F</dl>
                </div>
                <div class="row col-md">
                    <dt class="text-center">Description:</dt>
                    <dl class="text-center">${data.current.weather[0].description}</dl>           
                </div>
                <div class="row col-md">
                    <dt class="text-center">Humidity:</dt>
                    <dl class="text-center">${data.current.humidity}%</dl>       
                </div>
                <div class="row col-md">
                    <dt class="text-center">Wind:</dt>
                    <dl class="text-center">${data.current.wind_gust} mph</dl> 
                </div>
            </dl>
        </div>
        `

            $(`#weatherDisplay`).html(html);
        } else {
            let html = ``;
            let colCount = 0;
            data.daily.forEach(function(day){
                let dateTime = new Date(day.dt * 1000);
                let date = dateTime.toUTCString().slice(0, 11);
                colCount ++;

                html +=`
                     <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3 bg-transparent">
                        <dl class="displayDay">
                            <dt class="row text-center d-block">Date:</dt>
                            <dd class="row text-center d-block">${date}</dd>
                            <dt class="row text-center d-block">High Temp:</dt>
                            <dd class="row text-center d-block">${day.temp.max}<span>&#176;</span>F</dd>
                            <dt class="row text-center d-block">Description:</dt>
                            <dd class="row text-center d-block">${day.weather[0].description} <img class="weatherIcon" src="http://openweathermap.org/img/w/${day.weather[0].icon}.png"</dd>
                            <dt class="row text-center d-block">Humidity:</dt>
                            <dd class="row text-center d-block">${day.humidity}%</dd>
                            <dt class="row text-center d-block">Wind:</dt>
                            <dd class="row text-center d-block">${day.wind_gust} mph</dd>
                            
                        </dl>
                    </div>
            `
            })
            html += ``;
            $(`#weatherDisplay`).html(html);


        }
        reverseGeocode(lngLat, MY_MAP_KEY).then(function(result){
            console.log(result)
            $(`#weatherDisplayTitle>p`).html(`${result}`)
        })
    });

}


let markerToggle = $(`#markerTypeToggle`);
markerToggle.click(setLocation);
function setLocation(e){

    e.preventDefault();
    addressMarker = !addressMarker;
    // remove markers
    map._markers.forEach(function(marker){marker.remove();});
    if(addressMarker){
        markerToggle.html(`Drop Pin`);
        $(`#toggleInput`).toggleClass("d-none")

    } else {
        markerToggle.html(`Search Address`);
        $(`#toggleInput`).toggleClass("d-none");

        const marker = new mapboxgl.Marker({
            draggable: true
        }).setLngLat([lngLat.lng, lngLat.lat]).addTo(map);

        marker.on('dragend', onDragEnd)
    }
}

function onDragEnd(marker){

    lngLat = {lat: marker.target._lngLat.lat, lng: marker.target._lngLat.lng}
    renderWeather(lngLat);
}

$(`#inputAddressSubmit`).click(setMarkerText);
function setMarkerText(e){

    e.preventDefault();

    map._markers.forEach(function(marker){marker.remove();});
    let inputAddress = $(`#inputAddress`)[0].value;

    geocode(inputAddress, MY_MAP_KEY)
        .then(function(result){
            lngLat = {lng: result[0], lat: result[1] }
            let marker = new mapboxgl.Marker().setLngLat([lngLat.lng, lngLat.lat]).addTo(map);
            renderWeather(lngLat);
            map.flyTo({
                center: [lngLat.lng, lngLat.lat],
                zoom: 12,
                speed: 1
            });
        })

}
//calling the api
//const url = 'http://api.openweathermap.org/data/2.5/weather?&appid='+MY_WEATHER_ID;

//const getWeatherData = $.ajax(url, {data: {units: 'imperial', q: 'Salt Lake City'}}).done(function(data){
//    let temp = parseInt(data.main.temp);
//    let high = parseInt(data.main.temp_max);
//    console.log(data);
//    $('#today').text('Current Temperature: '  + temp);
//    $('.list1-item1').text(high);
//});

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
