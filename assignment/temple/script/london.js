/* Weather summary Scripts For England London*/
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=6269131&APPID=9a749bbbab85984be5f1f1fbc7254110', true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherStatus = JSON.parse(weatherRequest.responseText);
    console.log(weatherStatus);

    document.getElementById('Ecity').innerHTML = weatherStatus.name;
    document.getElementById('Edescription').innerHTML = weatherStatus.weather["0"].description;
    document.getElementById('Elog').innerHTML = weatherStatus.coord.lon;
    document.getElementById('Elat').innerHTML = weatherStatus.coord.lat;
    document.getElementById('Etemp').innerHTML = Math.round(weatherStatus.main.temp);
    document.getElementById('Ehumidity').innerHTML = weatherStatus.main.humidity;
}

