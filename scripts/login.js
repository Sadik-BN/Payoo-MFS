document.getElementById("login-btn").addEventListener("click", () => {
    let enteredNum = document.getElementById("num-field").value;
    let enteredPin = document.getElementById("pin-field").value;

    if (isNaN(enteredNum) || isNaN(enteredPin) || enteredNum.length < 11 || enteredPin.length < 4) {
        alert("Invalid Mobile Number or pin");
        return;
    }

    if (enteredNum === '01234567891' && enteredPin === '1234') {
        alert("Login Sucessfull");
        window.location.assign("./home.html");
        // window.location.replace("./home.html");
    }
    else {
        alert("Login Failed");
        return;
    }
})
