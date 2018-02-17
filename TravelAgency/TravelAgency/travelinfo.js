var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

var dt = Number(dd) + 1;

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
var tomorrow = yyyy + '-' + mm + '-'+ + dt;
var start = document.getElementById("start-date");
var end = document.getElementById("end-date");
start.min = today;
end.min = tomorrow;

function setReturn() {
    var end = document.getElementById("end-date");
    var start = document.getElementById("start-date").value;
    end.min = start;
}

function storeFlightData() {
    // inputs
    var current = document.getElementById("current").value;
    var travelDest = document.getElementById("destination").value;
    var priceRangelow = document.getElementById("flights-lowprice").value;
    var priceRangehigh = document.getElementById("flights-highprice").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    var activityLowprice = document.getElementById("activities-lowprice").value;
    var activityHighprice = document.getElementById("activities-highprice").value;
    var errorMessage = "Missing input fields, make sure to fill in everything!";

    // check boxes
    var cb1 = document.getElementById("hotelcb").checked;
    var cb2 = document.getElementById("hostelcb").checked;
    var cb3 = document.getElementById("airbnbcb").checked;
    var cb4 = document.getElementById("taxicb").checked;
    var cb5 = document.getElementById("buscb").checked;
    var cb6 = document.getElementById("traincb").checked;
    var cb7 = document.getElementById("ferrycb").checked;
    var cb8 = document.getElementById("ubercb").checked;

    var validData = 1;

    if (current === "") {
        validData = 0;
    }

    if (travelDest === "") {
        validData = 0;
    }

    if (startDate === "") {
        validData = 0;
    }

    if (endDate === "") {
        validData = 0;
    }

    if (startDate > endDate) {
        validDate = 0;
        errorMessage = "Incorrect flight dates, make sure departure is before return";
    }



    if (Number(priceRangelow) > Number(priceRangehigh)) {
        validData = 0;
        errorMessage = "Incorrect flight price range, put the lower number on the left";
    }

    if (Number(activityLowprice) > Number(activityHighprice)) {
        validData = 0;
        errorMessage = "Incorrect activity price range, put the lower number on the left";
    }

    var living = [];
    if (cb1) {
        living.push('Hotel');
    }

    if (cb2) {
        living.push('Hostel');
    }

    if (cb3) {
        living.push('AirBNB');
    }

    var transportation = [];
    if (cb4) {
        transportation.push('Taxi');
    }

    if (cb5) {
        transportation.push('Bus');
    }

    if (cb6) {
        transportation.push('Train');
    }

    if (cb7) {
        transportation.push('Ferry');
    }

    if (cb8) {
        transportation.push('Uber');
    }


    var userTravelData = {
        current: current,
        travelDest: travelDest,
        priceRangeLow: priceRangelow,
        priceRangeHigh: priceRangehigh,
        startDate: startDate,
        endDate: endDate,
        activityLowPrice: activityLowprice,
        activityHighPrice: activityHighprice,
        living: living,
        transportation: transportation
    };

    if (validData) {
        sessionStorage.setItem('userTravelData', JSON.stringify(userTravelData));
        window.location.href = "travelagentflights.html";
    } else {
        alert(errorMessage);
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
