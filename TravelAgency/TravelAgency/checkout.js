var flightData = JSON.parse(sessionStorage.getItem('chosenFlight'));
var attractionData = JSON.parse(sessionStorage.getItem('chosenAttractions'));
var hotelData = JSON.parse(sessionStorage.getItem('chosenHotel'));
var userData = JSON.parse(sessionStorage.getItem('userTravelData'));
var start = userData.startDate;
var end = userData.endDate;

var sm = Number(start.substring(5,7));
var sd = Number(start.substring(8,10));

var em = Number(end.substring(5,7));
var ed = Number(end.substring(8,10));
var diff;

if (em === sm) {
    diff = ed - sd;
} else {
    var m = em - sm - 1;
    diff = (31 -sd) + ed + (31 * m) + 1;
}

console.log(diff);

var hotelTotal = Number(hotelData.hotelPrice.substring(1)) * diff;

var sum = 0;
for (let i = 0; i < attractionData.length; i++) {   
    sum = sum + Number(attractionData[i].activityPrice.substring(1)); 
}

var total = sum + hotelTotal + Number(flightData.price.substring(1)) + 198 + 99;

document.getElementById("airfare").innerHTML = "Airfare&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$" + flightData.price.substring(1);
document.getElementById("hotel").innerHTML = "Hotels&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$" + hotelTotal;
document.getElementById("attractions").innerHTML = "Attractions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$" + sum;
document.getElementById("total").innerHTML = "Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$" + total;

function checkData() {
    var fullName = document.getElementById("fullname").value;
    var ccNumber = document.getElementById("ccnumber").value;
    var ccv = document.getElementById("ccv").value;
    var expDate = document.getElementById("expdate").value;
    var validData = 1;
    var errorMessage = "Missing fields, make sure all fields are filled out";
    var usersData = JSON.parse(localStorage.getItem("usersData"));
    var userData = JSON.parse(sessionStorage.getItem("userData"));
    var user = sessionStorage.getItem("user");
    var userName;

    if (user === "guest") {
        userName = userData.fname + " " + userData.lname;
    } else {
        for (let i = 0; i < usersData.length; i++) {
            if (user === usersData[i].email) {
                userName = usersData[i].fname + " " + usersData[i].lname;
                break;
            }
        }
    }

    if (fullName === "") {
        validData = 0;
    } else if (fullName != userName) {
        validData = 0;
        errorMessage = "Credit card name must match full name on profile";
    }

    if (ccNumber === "") {
        validData = 0;
    } else if (ccNumber.length != 11) {
        validData = 0;
        errorMessage = "Invalid credit card number, please enter 11 digits";
    }

    if (ccv === "") {
        validData = 0;
    } else if (ccv.length != 3) {
        validData = 0;
        errorMessage = "Invalid ccv, please enter 3 digits";
    }

    if (expDate === "") {
        validData = 0;
    }

    if (validData) {
        window.location.href = "success.html";
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