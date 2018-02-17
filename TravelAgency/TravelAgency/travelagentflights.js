sessionStorage.setItem('flight-count', 1);
sessionStorage.setItem('travelAgent', 1);
var userData = JSON.parse(sessionStorage.getItem('userTravelData'));
document.getElementById("current-location").innerHTML = 'Customer Location: ' + userData.current;
document.getElementById("travel-destination").innerHTML = 'Travel Destination: ' + userData.travelDest;
document.getElementById("departure-date").innerHTML = 'Trip Start Date: ' + userData.startDate;
document.getElementById("return-date").innerHTML = 'Trip End Date: ' + userData.endDate;
document.getElementById("priceFlights-from").innerHTML = 'Flight Price Low: ' + userData.priceRangeLow;
document.getElementById("priceFlights-to").innerHTML = 'Flight Price High: ' + userData.priceRangeHigh;
document.getElementById("living").innerHTML = 'Accomodation preferences: ' + userData.living;
document.getElementById("transportation").innerHTML = 'Transportation preferences: ' + userData.transportation;
document.getElementById("priceActivities-from").innerHTML = 'Attractions Price Low: ' + userData.activityLowPrice;
document.getElementById("priceActivities-to").innerHTML = 'Attractions Price High: ' + userData.activityHighPrice;

function addNewFlight() {
    var div = document.createElement('div');
    var airline = document.createElement('input');
    var departure = document.createElement('input');
    var departTime = document.createElement('input');
    var arrival = document.createElement('input');
    var arrivTime = document.createElement('input');
    var flightPrice = document.createElement('input');
    var h4 = document.createElement('h4');

    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var label4 = document.createElement('label');
    var label5 = document.createElement('label');
    var label6 = document.createElement('label');

    label1.innerHTML = 'Enter airline:';
    label2.innerHTML = 'Enter flight departure location: ';
    label3.innerHTML = 'Enter flight departure time/date: ';
    label4.innerHTML = 'Enter flight arrival location: ';
    label5.innerHTML = 'Enter flight arrival time/date: ';
    label6.innerHTML = 'Enter flight price: $: ';

    var count = sessionStorage.getItem('flight-count');
    count = Number(count) + 1;
    sessionStorage.setItem('flight-count', count);
    h4.innerHTML = 'Flight ' + count;

    div.setAttribute('class', 'flight-data');
    airline.setAttribute('name', 'airline');
    departure.setAttribute('name', 'departure');
    departTime.setAttribute('name', 'depart-time');
    arrival.setAttribute('name', 'arrival');
    arrivTime.setAttribute('name', 'arriv-time');
    flightPrice.setAttribute('name', 'flight-price');


    airline.type = 'text';
    departure.type = 'text';
    departTime.type = 'text';
    arrival.type = 'text';
    arrivTime.type = 'text';
    flightPrice.type = 'number';

    var par = document.getElementsByClassName("flight-container")[0];
    par.appendChild(div);
    div.appendChild(h4);
    div.appendChild(label1);
    div.appendChild(airline);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label2);
    div.appendChild(departure);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label3);
    div.appendChild(departTime);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label4);
    div.appendChild(arrival);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label5);
    div.appendChild(arrivTime);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label6);
    div.appendChild(flightPrice);
    div.appendChild(createBr());
    div.appendChild(createBr());
}

function checkData() {
    var flightContainer = document.getElementsByClassName("flight-container");
    var validData = 1;
    var flightDivs = flightContainer[0].getElementsByTagName("div");
    var flights = [];

    for (let i = 0; i < flightDivs.length; i++) {
        var flightInputs = flightDivs[i].getElementsByTagName("input");
        for (let j = 0; j < flightInputs.length; j++) {
            if (flightInputs[j].value === "") {
                validData = 0;
                break;
            }
        }
        var flightData = {
                airline: flightInputs[0].value,
                departure: flightInputs[1].value,
                arrival: flightInputs[2].value,
                departTime: flightInputs[3].value,
                arrivTime: flightInputs[4].value,
                flightPrice: flightInputs[5].value
        };
        flights.push(flightData);
    }

    if (validData) {
        sessionStorage.setItem('flightData', JSON.stringify(flights));
        sessionStorage.removeItem('flight-count');
        window.location.href = "flightdata.html";

    } else {
        alert("Missing an input field, go back and double check all inputs are filled in!");
    }
}

function createBr() {
    var br = document.createElement('br');
    return br;
}

function deleteDiv() {
    var par = document.getElementsByClassName("flight-container")[0];
    if (par.childElementCount > 2) {
        par.removeChild(par.lastChild);
        var count = sessionStorage.getItem('flight-count');
        count = Number(count) - 1;
        sessionStorage.setItem('flight-count', count);
    } else {
        alert("Must enter at least 1 flight");
    }
}

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}
