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
