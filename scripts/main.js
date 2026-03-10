try {
    loginBtn.addEventListener("click", () => {
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
    });
} catch (error) { };

withdrawBtn.addEventListener("click", () => {
    let withdrwnAmnt = document.getElementById("cashout-amount-field").value;
    withdrwnAmnt = Number(withdrwnAmnt);
    let agentNum = document.getElementById("cashout-agent-field").value;
    let cashoutPin = document.getElementById("cashout-pin-field").value;
    if (isNaN(agentNum) || isNaN(cashoutPin) || agentNum.length < 11 || cashoutPin.length < 4) {
        document.getElementById("cashout-amount-field").value = "";
        document.getElementById("cashout-agent-field").value = "";
        document.getElementById("cashout-pin-field").value = "";
        alert("Invalid Mobile Number or pin");
        return;
    }
    if (withdrwnAmnt > userAmnt || withdrwnAmnt < 0) {
        document.getElementById("cashout-amount-field").value = "";
        document.getElementById("cashout-agent-field").value = "";
        document.getElementById("cashout-pin-field").value = "";
        alert("Invalid Amount");
        return;
    }
    if (cashoutPin !== '1234') {
        document.getElementById("cashout-amount-field").value = "";
        document.getElementById("cashout-agent-field").value = "";
        document.getElementById("cashout-pin-field").value = "";
        alert("Invalid Pin");
        return;
    }

    else {
        document.getElementById("cashout-amount-field").value = "";
        document.getElementById("cashout-agent-field").value = "";
        document.getElementById("cashout-pin-field").value = "";
        alert("Cashout Sucessfull");
        userAmnt -= withdrwnAmnt;
        updateBalance();
        return;
    }

});


getBonusBtn.addEventListener("click", () => {
    let enteredCoupon = document.querySelector("#getbonus-btn").previousElementSibling.value;

    if (enteredCoupon === "payoo2026") {
        alert("Congratulations! You've received a bonus of $500.");
        userAmnt += 500;
        updateBalance();
    } else {
        alert("Invalid coupon code. Please try again.");
    }
});