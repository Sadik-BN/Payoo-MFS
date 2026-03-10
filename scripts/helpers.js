let loginBtn = document.getElementById("login-btn");

let userAmnt;
function updateBalance() {
    document.getElementById("usr-balance").innerText = ` ${userAmnt}`;
}
userAmnt = 45000;
updateBalance();

let withdrawBtn = document.getElementById("withdraw-btn");
let getBonusBtn = document.getElementById("getbonus-btn");