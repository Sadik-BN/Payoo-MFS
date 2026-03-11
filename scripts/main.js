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
        document.getElementById("history").innerHTML += `        
        <div class="flex gap-4 bg-base-200 shadow-md rounded-lg p-4">
            <div class="h-[45px] w-[45px] p-[11px] rounded-full bg-[#08080805]">
                <img src="assets/opt-6.png" alt="">
            </div>
            <div>
                <h3 class="font-bold text-[16px]"> Cashout </h3>
                <p class="text-[12px] text-neutral/50">Withdrawn Amount: $${withdrwnAmnt} <br> Time: ${now.toLocaleTimeString()} <br> Date: ${now.toLocaleDateString()}</p>
            </div>
        </div>`;
        document.getElementById("history").noHistory = false;
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
        document.getElementById("history").innerHTML += `        
        <div class="flex gap-4 bg-base-200 shadow-md rounded-lg p-4">
            <div class="h-[45px] w-[45px] p-[11px] rounded-full bg-[#08080805]">
                <img src="assets/opt-6.png" alt="">
            </div>
            <div>
                <h3 class="font-bold text-[16px]"> Bonus </h3>
                <p class="text-[12px] text-neutral/50">Bonus Amount: $500 <br> Time: ${now.toLocaleTimeString()} <br> Date: ${now.toLocaleDateString()}</p>
            </div>
        </div>`;
        document.getElementById("history").noHistory = false;
    } else {
        alert("Invalid coupon code. Please try again.");
    }
});