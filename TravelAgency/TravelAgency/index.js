function checkData() {
    var email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter an email address");
    } else {
        window.location.href = "signup.html";
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