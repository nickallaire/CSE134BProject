function checkData() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var newUser = document.getElementById("newUser").checked;
    var validData = 1;
    var i = 0;

    if (email === "") {
        alert("Please input an email");
        validData = 0;
    }

    if (password === "") {
        alert("Please input a password");
        validData = 0;
    }

    if (validData) {
        var users = JSON.parse(localStorage.getItem("users"));
        var valid = 1;

        if (newUser) {
            if (users) {
                for (i = 0; i < users.length; i++) {
                    if (email === users[i].email) {
                        valid = 0;
                        break;
                    }
                }
            } else {
                users = [];
            }

            if (valid) {
                var user = {
                    email: email,
                    password: password
                };
                users.push(user);

                localStorage.setItem("users", JSON.stringify(users));
                sessionStorage.setItem("user", email);
                window.location.href = "personalinfo.html";
            } else {
                alert("This email already exists, please enter a new one");
            }
        } else {
            if (users) {
                valid = 0;
                for (i = 0; i < users.length; i++) {
                    if (email === users[i].email) {
                        if (password === users[i].password) {
                            valid = 1;
                            break;
                        }
                    }
                }
            }

            if (valid) {
                sessionStorage.setItem("user", email);
                window.location.href = "travelinfo.html";
            } else {
                alert("Incorrect username and password");
            }
        }
    }

    var i;

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

    console.log("session storage");
    for (i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
}