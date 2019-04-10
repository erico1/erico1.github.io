/* Weather summary Scripts For Nigeria*/
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2328926&APPID=9a749bbbab85984be5f1f1fbc7254110', true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherStatus = JSON.parse(weatherRequest.responseText);
    console.log(weatherStatus);

    document.getElementById('Ncity').innerHTML = weatherStatus.name;
    document.getElementById('Ndescription').innerHTML = weatherStatus.weather["0"].description;
    document.getElementById('Nlog').innerHTML = weatherStatus.coord.lon;
    document.getElementById('Nlat').innerHTML = weatherStatus.coord.lat;
    document.getElementById('Ntemp').innerHTML = Math.round(weatherStatus.main.temp);
    document.getElementById('Nhumidity').innerHTML = weatherStatus.main.humidity;
}
