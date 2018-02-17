﻿var data = JSON.parse(sessionStorage.getItem('flightData'));
console.log(data[0]);

for (let i = 0; i < data.length; i++) {
    createDiv(data[i].airline, data[i].arrivTime, data[i].arrival, data[i].departTime, data[i].departure, data[i].flightPrice);
}


function createDiv(varAirline, varArrivTime, varArrival, varDepartTime, varDeparture, varFlightPrice) {
    var flight = document.createElement('div');
    var flightFirst = document.createElement('div');
    var flightLeft = document.createElement('div');
    var flightMid = document.createElement('div');
    var flightRight = document.createElement('div');

    var flightRadio = document.createElement('input');

    var airline = document.createElement('h1');
    var path = document.createElement('h3');
    var depart = document.createElement('h4');
    var ret = document.createElement('h4');
    var price = document.createElement('h3');


    flight.setAttribute('class', "flight");
    flightFirst.setAttribute('class', "flight-first");
    flightLeft.setAttribute('class', "flight-left");
    flightMid.setAttribute('class', "flight-mid");
    flightRight.setAttribute('class', "flight-right");

    flightRadio.type = 'radio';
    flightRadio.setAttribute('name', 'flight');
    flightRadio.setAttribute('value', 'value');

    airline.setAttribute('class', "airline");
    path.setAttribute('class', "path");
    depart.setAttribute('class', "depart");
    ret.setAttribute('class', "return");
    price.setAttribute('class', "price");


    airline.innerHTML = varAirline;
    path.innerHTML = varDeparture + '&rarr;' + varArrival;
    depart.innerHTML = 'Departs: ' + varDepartTime;
    ret.innerHTML = 'Returns: ' + varArrivTime;
    price.innerHTML = '$' + varFlightPrice;

    var par = document.getElementsByClassName("flight-data-container info")[0];
    par.appendChild(flight);
    flight.appendChild(flightFirst);
    flight.appendChild(flightLeft);
    flight.appendChild(flightMid);
    flight.appendChild(flightRight);
    flightFirst.appendChild(flightRadio);
    flightLeft.appendChild(airline);
    flightLeft.appendChild(path);
    flightMid.appendChild(depart);
    flightMid.appendChild(ret);
    flightRight.appendChild(price);

}

function checkData() {
    var flight = document.getElementsByClassName("flight");
    var index = -1;
    for (let i = 0; i < flight.length; i++) {
        var radio = flight[i].getElementsByTagName("input");
        if (radio[0].checked === true) {
            index = i;
            break;
        }
    }

    if (index != -1) {

        var al = flight[index].getElementsByClassName("airline")[0].innerHTML;
        var p = flight[index].getElementsByClassName("path")[0].innerHTML;
        var d = flight[index].getElementsByClassName("depart")[0].innerHTML;
        var r = flight[index].getElementsByClassName("return")[0].innerHTML;
        var pr = flight[index].getElementsByClassName("price")[0].innerHTML;

        var flightChosen = {
            airline: al,
            path: p,
            dep: d,
            arr: r,
            price: pr 
        };

        sessionStorage.setItem("chosenFlight", JSON.stringify(flightChosen));
        window.location.href = "hotels.html";
    } else {
        alert("Please select a flight");
    }


    console.log(flightChosen);

}

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}