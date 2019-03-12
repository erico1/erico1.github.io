var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var towns = request.response;
    showtownsInfo(towns);
}

function showtownsInfo(jsonObj) {
    var towns = jsonObj['towns'];
    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Franklin" || towns[i].name == "Greenville" || towns[i].name == "Springfield") { 


            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myImages = document.createElement("img");

            myH2.textContent = towns[i].name;
            myPara1.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Annual Rainfall:' + towns[i].averageRainfall; 

            if (towns[i].name == 'Franklin') {
                myImages.setAttribute('src', 'erico1.github.io/assignment/lesson-9/image/town1.jpg');
                myImages.setAttribute('alt', 'An image of a beatiful city');
            }
            else if (towns[i].name == 'Greenville') {
                myImages.setAttribute('src', 'erico1.github.io/assignment/lesson-9/image/town2.jpeg');
                myImages.setAttribute('alt', 'An image of a beatiful city');
            }
            else if (towns[i].name == 'Springfield') {
                myImages.setAttribute('src', 'erico1.github.io/assignment/lesson-9/image/town3.jpeg');
                myImages.setAttribute('alt', 'Beautiful city');
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);

            section.appendChild(myArticle);


         } 
    }
}