sessionStorage.setItem('accomodation-count', 1);
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

function addNewAccomodation() {
    var div = document.createElement('div');
    var accomodationType = document.createElement('input');
    var accomodationName = document.createElement('input');
    var accomodationLocation = document.createElement('input');
    var accomodationPrice = document.createElement('input');
    var h4 = document.createElement('h4');

    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var label4 = document.createElement('label');

    label1.innerHTML = 'Enter accomodation type: ';
    label2.innerHTML = 'Enter name: ';
    label3.innerHTML = 'Enter location: ';
    label4.innerHTML = 'Enter price per night: $';

    var count = sessionStorage.getItem('accomodation-count');
    count = Number(count) + 1;
    sessionStorage.setItem('accomodation-count', count);
    h4.innerHTML = 'Accomodation ' + count;

    div.setAttribute('class', 'accomodation-data');
    accomodationType.setAttribute('name', 'accomodation-type');
    accomodationName.setAttribute('name', 'accomodation-name');
    accomodationLocation.setAttribute('name', 'activity-location');
    accomodationPrice.setAttribute('name', 'accomodation-price');

    accomodationType.type = 'text';
    accomodationName.type = 'text';
    accomodationLocation.type = 'text';
    accomodationPrice.type = 'number';

    var par = document.getElementsByClassName("accomodation-container")[0];
    par.appendChild(div);
    div.appendChild(h4);
    div.appendChild(label1);
    div.appendChild(accomodationType);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label2);
    div.appendChild(accomodationName);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label3);
    div.appendChild(accomodationLocation);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label4);
    div.appendChild(accomodationPrice);
    div.appendChild(createBr());
    div.appendChild(createBr());
}

function checkData() {
    var accomodationContainer = document.getElementsByClassName("accomodation-container");
    var validData = 1;
    var accomodationDiv = accomodationContainer[0].getElementsByTagName("div");
    var accomodations = [];

    for (let i = 0; i < accomodationDiv.length; i++) {
        var accomodationInputs = accomodationDiv[i].getElementsByTagName("input");
        for (let j = 0; j < accomodationInputs.length; j++) {
            if (accomodationInputs[j].value === "") {
                validData = 0;
                break;
            }
        }
        var accomodationData = {
                accomodationType: accomodationInputs[0].value,
                accomodationName: accomodationInputs[1].value,
                accomodationLocation: accomodationInputs[2].value,
                accomodationPrice: accomodationInputs[3].value,
        };
        accomodations.push(accomodationData);
    }

    if (validData) {
        sessionStorage.setItem('accomodationData', JSON.stringify(accomodations));
        sessionStorage.removeItem('accomodation-count');
        window.location.href = "hotels.html";

    } else {
        alert("Missing an input field, go back and double check all inputs are filled in!");
    }
}

function createBr() {
    var br = document.createElement('br');
    return br;
}

function deleteDiv() {
    var par = document.getElementsByClassName("accomodation-container")[0];
    if (par.childElementCount > 2) {
        par.removeChild(par.lastChild);
        var count = sessionStorage.getItem('accomodation-count');
        count = Number(count) - 1;
        sessionStorage.setItem('accomodation-count', count);
    } else {
        alert("Must enter at least 1 accomodation");
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
