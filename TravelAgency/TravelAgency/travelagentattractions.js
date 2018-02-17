sessionStorage.setItem('attraction-count', 1);
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

function addNewAttraction() {
    var div = document.createElement('div');
    var activityName = document.createElement('input');
    var activityDateTime = document.createElement('input');
    var activityPrice = document.createElement('input');
    var activityLocation = document.createElement('input');
    var h4 = document.createElement('h4');

    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var label4 = document.createElement('label');

    label1.innerHTML = 'Enter activity name: ';
    label2.innerHTML = 'Enter activity date and time: ';
    label3.innerHTML = 'Enter activity price: $';
    label4.innerHTML = 'Enter activity location: ';

    var count = sessionStorage.getItem('attraction-count');
    count = Number(count) + 1;
    sessionStorage.setItem('attraction-count', count);
    h4.innerHTML = 'Activity ' + count;

    div.setAttribute('class', 'attraction-data');
    activityName.setAttribute('name', 'activity-name');
    activityLocation.setAttribute('name', 'activity-location');
    activityDateTime.setAttribute('name', 'activity-date-time');
    activityPrice.setAttribute('name', 'activity-price');

    activityName.type = 'text';
    activityLocation.type = 'text';
    activityDateTime.type = 'text';
    activityPrice.type = 'number';

    var par = document.getElementsByClassName("attractions-container")[0];
    par.appendChild(div);
    div.appendChild(h4);
    div.appendChild(label1);
    div.appendChild(activityName);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label4);
    div.appendChild(activityLocation);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label2);
    div.appendChild(activityDateTime);
    div.appendChild(createBr());
    div.appendChild(createBr());
    div.appendChild(label3);
    div.appendChild(activityPrice);
    div.appendChild(createBr());
    div.appendChild(createBr());
}

function checkData() {
    var attractionContainer = document.getElementsByClassName("attractions-container");
    var validData = 1;
    var attractionDivs = attractionContainer[0].getElementsByTagName("div");
    var attractions = [];

    for (let i = 0; i < attractionDivs.length; i++) {
        var attractionInputs = attractionDivs[i].getElementsByTagName("input");
        for (let j = 0; j < attractionInputs.length; j++) {
            if (attractionInputs[j].value === "") {
                validData = 0;
                break;
            }
        }
        var attractionData = {
                activityName: attractionInputs[0].value,
                activityLocation: attractionInputs[1].value,
                activityDateTime: attractionInputs[2].value,
                activityPrice: attractionInputs[3].value,
        };
        attractions.push(attractionData);
    }

    if (validData) {
        sessionStorage.setItem('attractionData', JSON.stringify(attractions));
        sessionStorage.removeItem('attraction-count');
        window.location.href = "attractions.html";

    } else {
        alert("Missing an input field, go back and double check all inputs are filled in!");
    }
}

function createBr() {
    var br = document.createElement('br');
    return br;
}

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}