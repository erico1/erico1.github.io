/* This is for auto active page styling active link */

var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF=urlArray[urlArray.length-1];

if (pageHREF !=="") {
    var nav = document.querySelectorAll('ul#mainmenu li a');
    var i;

    for (i=0; i<nav.length; i++) {
        var currentURL=(nav[i].getAttribute("href"));
        nav[i].parentNode.className="";
        if (currentURL===pageHREF) {
            nav[i].parentNode.className="current";
        }
    }
}

/* Ends auto active page styling active link */





