document.getElementById("withdraw-btn").addEventListener("click", () => {
    let prevAmnt = document.getElementById("usr-balance").innerText;
    prevAmnt = Number(prevAmnt);
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
    if (withdrwnAmnt > prevAmnt || withdrwnAmnt < 0) {
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
        let newBalance = prevAmnt - withdrwnAmnt;
        document.getElementById("usr-balance").innerText = newBalance;
        return;
    }

})