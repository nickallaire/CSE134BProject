var userData = JSON.parse(sessionStorage.getItem('userTravelData'));
var startDate = userData.startDate;
var endDate = userData.endDate;

var dateInput = document.getElementById("date");
dateInput.min = startDate;
dateInput.max = endDate;

var flightData = JSON.parse(sessionStorage.getItem('chosenFlight'));
var attractionData = JSON.parse(sessionStorage.getItem('chosenAttractions'));
var hotelData = JSON.parse(sessionStorage.getItem('chosenHotel'));

//Display Customer Data
document.getElementById("current-location").innerHTML = 'Customer Location: ' + userData.current;
document.getElementById("travel-destination").innerHTML = 'Travel Destination: ' + userData.travelDest;
document.getElementById("departure-date").innerHTML = 'Trip Start Date: ' + userData.startDate;
document.getElementById("return-date").innerHTML = 'Trip End Date: ' + userData.endDate;
document.getElementById("priceFlights-from").innerHTML = 'Flight Price Low: $' + userData.priceRangeLow;
document.getElementById("priceFlights-to").innerHTML = 'Flight Price High: $' + userData.priceRangeHigh;
document.getElementById("living").innerHTML = 'Accomodation pref: ' + userData.living;
document.getElementById("transportation").innerHTML = 'Transportation pref: ' + userData.transportation;
document.getElementById("priceActivities-from").innerHTML = 'Attractions Price Low: $' + userData.activityLowPrice;
document.getElementById("priceActivities-to").innerHTML = 'Attractions Price High: $' + userData.activityHighPrice;

// Display Flight Data
document.getElementById("airline").innerHTML = 'Airline: ' + flightData.airline;
document.getElementById("path").innerHTML = 'Path: ' + flightData.path;
document.getElementById("dep").innerHTML = flightData.dep;
document.getElementById("arr").innerHTML = flightData.arr;
document.getElementById("price").innerHTML = 'Price: ' + flightData.price;

// Display Attraction Data
for (let i = 0; i < attractionData.length; i++) {
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var label4 = document.createElement('label');

    var par = document.getElementsByClassName("user-itinerary1")[0];

    label1.innerHTML = 'Name: ' + attractionData[i].activityName;
    label2.innerHTML = 'Location: ' + attractionData[i].activityLocation;
    label3.innerHTML = 'Date/Time: ' + attractionData[i].activityDateTime;
    label4.innerHTML = 'Price: ' + attractionData[i].activityPrice;

    par.appendChild(label1);
    par.appendChild(createBr());
    par.appendChild(createBr());
    par.appendChild(label2);
    par.appendChild(createBr());
    par.appendChild(createBr());
    par.appendChild(label3);
    par.appendChild(createBr());
    par.appendChild(createBr());
    par.appendChild(label4);
    par.appendChild(createBr());
    par.appendChild(createBr());
    par.appendChild(createBr());
    par.appendChild(createBr());
}

// Display Hotel Data
var label1 = document.createElement('label');
var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var label5 = document.createElement('label');

var par = document.getElementsByClassName("user-itinerary1")[0];
label1.innerHTML = '<b>Hotel Data</b>'; 
label2.innerHTML = 'Type: ' + hotelData.hotelType;
label3.innerHTML = 'Name: ' + hotelData.hotelName;
label4.innerHTML = 'Location: ' + hotelData.hotelLocation;
label5.innerHTML = 'Price (per night): ' + hotelData.hotelPrice;

par.appendChild(label1);
par.appendChild(createBr());
par.appendChild(createBr());
par.appendChild(label2);
par.appendChild(createBr());
par.appendChild(createBr());
par.appendChild(label3);
par.appendChild(createBr());
par.appendChild(createBr());
par.appendChild(label4);
par.appendChild(createBr());
par.appendChild(createBr());
par.appendChild(label5);
console.log(document.getElementsByClassName("user-itinerary1")[0].clientHeight);
var it = document.getElementsByClassName("user-itinerary")[0].clientHeight;
var it1 = document.getElementsByClassName("user-itinerary1")[0].clientHeight;
var size = (it > it1) ? it : it1;
document.getElementsByClassName("info")[0].style.paddingBottom = size + "px";

function addNewDay() {
    var userData = JSON.parse(sessionStorage.getItem('userTravelData'));
    var startDate = userData.startDate;
    var endDate = userData.endDate;

    var divDayContainer = document.createElement('div')
    var dateInput = document.createElement('input')
    var locInput = document.createElement('input')

    var dateLabel = document.createElement('label')
    var locLabel = document.createElement('label')

    dateLabel.innerHTML = "Enter Date: "
    locLabel.innerHTML = "Enter Location: "

    divDayContainer.setAttribute('class', 'create-itinerary-day-container')
    dateInput.setAttribute('name', 'date')
    dateInput.setAttribute('min', startDate)
    dateInput.setAttribute('max', endDate)
    locInput.setAttribute('name', 'location')

    dateInput.type = 'date'
    locInput.type = 'text'

    var par = document.getElementsByClassName("create-itinerary-container")[0]

    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(dateLabel)
    divDayContainer.appendChild(dateInput)
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(locLabel)
    divDayContainer.appendChild(locInput)
    divDayContainer.appendChild(createBr())
    divDayContainer.appendChild(createBr())
    addMoreDetails(divDayContainer)
    par.appendChild(divDayContainer)
}

// add another 2 input boxes to add an event
function addMoreDetails(specifiedClass = null) {
    var div = document.createElement('div');
    var time = document.createElement('input')
    var details = document.createElement('input')

    var timeLabel = document.createElement('label')
    var detailLabel = document.createElement('label')
    
    timeLabel.innerHTML = "Enter time: "
    detailLabel.innerHTML = "Enter event details: "

    div.setAttribute('class', 'create-itinerary-day-event')
    time.setAttribute('name', 'time')
    details.setAttribute('name', 'details')

    time.type = 'text'
    details.type = 'text'

    var par
    if(specifiedClass == null) {
        par = document.getElementsByClassName("create-itinerary-day-container");
        par = par[par.length-1]        
    } else {
        par = specifiedClass
    }

    div.appendChild(timeLabel)
    div.appendChild(time)
    div.appendChild(createBr())
    div.appendChild(createBr())
    div.appendChild(detailLabel)
    div.appendChild(details)
    div.appendChild(createBr())
    div.appendChild(createBr())    
    par.appendChild(div)
}

function createBr() {
    var br = document.createElement('br');
    return br;
}

function finish() {
    days = document.getElementsByClassName('create-itinerary-day-container')
    var itinerary = []
    var validData = 1;

    for (let i = 0; i < days.length; i++) {
        // access the day and it's details
        var day = days[i];
        var inputs = getListOfElements(day.children, "input")
        var date = inputs[0].value
        var location = inputs[1].value
        var divs = getListOfElements(day.children, "div")

        if (location === "") {
            validData = 0;
            break;
        }

        if (date === "") {
            validData = 0;
            break;
        }
        // access the events of that day
        var itineraryEvents = []
        for (let x = 0; x < divs.length; x++) {
            const dayEvent = divs[x];
            var inputs_day = getListOfElements(dayEvent.children, "input")
            var time = inputs_day[0].value
            var details = inputs_day[1].value

            if (time === "") {
                validData = 0;
                break;
            }

            if (details === "") {
                validData = 0;
                break;
            }

            itineraryEvents.push(
                {
                    "time": time,
                    "details": details
                }
            )
        }
        itinerary.push(
            {
                "date": date,
                "location": location,
                "events": itineraryEvents
            }
        )
    }

    if (validData) {
        sessionStorage.setItem("itinerary", JSON.stringify(itinerary))
        window.location.href = "verify.html"
    } else {
        alert("Missing an input field, go back and double check all inputs are filled in!");
    }
}

function getListOfElements(searchSpace, name) {
    result = []
    for (let i = 0; i < searchSpace.length; i++) {
        const element = searchSpace[i];
        if(element.localName == name) {
            result.push(element)
        }
    }
    return result
}

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}