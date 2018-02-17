function checkData() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipCode = document.getElementById("zipcode").value;

    var validData = 1;
    var errorMessage = "Missing fields, make sure all fields are filled out";
    var user = sessionStorage.getItem("user");

    if (firstName === "") {
        validData = 0;
    }

    if (lastName === "") {
        validData = 0;
    }

    if (phoneNumber === "") {
        validData = 0;
    } else if (phoneNumber.length != 10) {
        errorMessage = "Phone number too short, please input 10 digits";
        validData = 0;
    }

    if (address === "") {
        validData = 0;
    }

    if (city === "") {
        validData = 0;
    }

    if (state === "") {
        validData = 0;
    }

    if (zipCode === "") {
        validData = 0;
    } else if (zipCode.length != 5) {
        errorMessage = "Zip code too short, please input 5 digits";
        validData = 0;
    }

    if (validData) {
        var userData = {
            email: user,
            fname: firstName,
            lname: lastName,
            phone: phoneNumber,
            address: address,
            city: city,
            state: state,
            zip: zipCode
        };

        if (user) {
            var usersData = JSON.parse(localStorage.getItem("usersData"));
            if (usersData) {
                usersData.push(userData);
            } else {
                usersData = [userData];
            }

            localStorage.setItem("usersData", JSON.stringify(usersData));
        } else {
            userData.email = "guest";
            sessionStorage.setItem("userData", JSON.stringify(userData));
            sessionStorage.setItem("user", "guest");
        }
        window.location.href = "travelinfo.html";

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