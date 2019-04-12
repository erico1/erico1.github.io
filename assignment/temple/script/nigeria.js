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


var myobj =  {
        
    "closures": [
        " Saturday, 17 August 2019",  "Monday, 26 August 2019 - Monday, 4 November 2019", "Tuesday, 24 December 2019 - Thursday, 26 December 2019" ]       
}



/*json obj */
var output= document.getElementById('output');
output.innerHTML = myobj.closures[0];
var output= document.getElementById('output2');
output.innerHTML = myobj.closures[1];
var output= document.getElementById('output3');
output.innerHTML = myobj.closures[2] ;
 
