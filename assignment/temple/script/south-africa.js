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


/*json obj */

var myobj =  {
        
    "closures": [
        "2019 Saturday, 13 April", "2019 Friday, 19 April 2019 (Limited Hours)",
        "Wednesday, 1 May 2019 (Limited Hours)",
        "Monday, 5 August 2019 - Monday, 19 August 2019",
        "Saturday, 12 October 2019",
        "Tuesday, 24 December 2019 (Limited Hours)",
        "Wednesday, 25 December 2019 (Limited Hours)",
        "Thursday, 26 December 2019 (Limited Hours)",
        "Tuesday, 31 December 2019 (Limited Hours)" ]       
}
var output= document.getElementById('output');
output.innerHTML = myobj.closures[0];
var output= document.getElementById('output2');
output.innerHTML = myobj.closures[1];
var output= document.getElementById('output3');
output.innerHTML = myobj.closures[2] ;
var output= document.getElementById('output4');
output.innerHTML = myobj.closures[3] ;
var output= document.getElementById('output5');
output.innerHTML = myobj.closures[4] ;
var output= document.getElementById('output6');
output.innerHTML = myobj.closures[5] ;
var output= document.getElementById('output7');
output.innerHTML = myobj.closures[6] ;
var output= document.getElementById('output8');
output.innerHTML = myobj.closures[7] ;
var output= document.getElementById('output9');
output.innerHTML = myobj.closures[8] ;
 