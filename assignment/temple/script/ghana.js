/* Weather summary Scripts For Ghana */
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2300660&APPID=9a749bbbab85984be5f1f1fbc7254110', true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherStatus = JSON.parse(weatherRequest.responseText);
    console.log(weatherStatus);

    document.getElementById('Gcity').innerHTML = weatherStatus.name;
    document.getElementById('Gdescription').innerHTML = weatherStatus.weather["0"].description;
    document.getElementById('Glog').innerHTML = weatherStatus.coord.lon;
    document.getElementById('Glat').innerHTML = weatherStatus.coord.lat;
    document.getElementById('Gtemp').innerHTML = Math.round(weatherStatus.main.temp);
    document.getElementById('Ghumidity').innerHTML = weatherStatus.main.humidity;
}
