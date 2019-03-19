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


