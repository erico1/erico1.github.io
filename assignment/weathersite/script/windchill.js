function doWindChill(ws, temp) {

    if (ws && temp) {
        var wC = windChill(temp, ws);
        document.getElementById("output-windchill").innerHTML = wC + " ºF";
    }
}

function windChill(tempF, speed) {
    var f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return Math.round(f);
}
