let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8036a0b28980d99aa1eed77c711e9fe3';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () 
{

    let weatherData = JSON.parse(weatherRequest.responseText)
    console.log(weatherData);
    document.getElementById('temMax').innerHTML = weatherData.main.temp_max;
    document.getElementById('des').innerHTML = weatherData.weather[0].description;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('speed').innerHTML = weatherData.wind.speed;
    document.getElementById('windChill').innerHTML = weatherData.wind.deg;
    

    let icon = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png' ;
    let desc = weatherData.weather[0].description;

    document.getElementById('cT').setAttribute('src', icon)

    document.getElementById('cT').setAttribute('alt', desc);
}

/* 5 Weather forecast script */

var ForecastRequest = new XMLHttpRequest();
ForecastRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9a749bbbab85984be5f1f1fbc7254110', true);
ForecastRequest.send();
ForecastRequest.onload = function () {
    var preston = JSON.parse(ForecastRequest.responseText);
    console.log(preston);

    document.getElementById("MON").innerHTML = Math.round(preston.list[2].main.temp) + " °F";
    document.getElementById("TUE").innerHTML = Math.round(preston.list[4].main.temp) + " °F";
    document.getElementById("WED").innerHTML = Math.round(preston.list[8].main.temp) + " °F";
    document.getElementById("THUR").innerHTML = Math.round(preston.list[16].main.temp) + " °F";
    document.getElementById("FRI").innerHTML = Math.round(preston.list[32].main.temp) + " °F";
}


