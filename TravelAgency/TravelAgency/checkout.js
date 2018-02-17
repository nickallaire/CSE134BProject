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

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

    console.log("session storage");
    for (i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
}