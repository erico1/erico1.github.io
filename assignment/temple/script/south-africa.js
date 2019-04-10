/* Weather summary Scripts For South Africa*/
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=953987&APPID=9a749bbbab85984be5f1f1fbc7254110', true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherStatus = JSON.parse(weatherRequest.responseText);
    console.log(weatherStatus);

    document.getElementById('Scity').innerHTML = weatherStatus.name;
    document.getElementById('Sdescription').innerHTML = weatherStatus.weather["0"].description;
    document.getElementById('Slog').innerHTML = weatherStatus.coord.lon;
    document.getElementById('Slat').innerHTML = weatherStatus.coord.lat;
    document.getElementById('Stemp').innerHTML = Math.round(weatherStatus.main.temp);
    document.getElementById('Shumidity').innerHTML = weatherStatus.main.humidity;
}
