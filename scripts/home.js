document.getElementById("logout-btn").addEventListener('click', () => {
    window.location.replace('./index.html');
    alert("Succesfully Logged Out");
});

document.getElementById("cashout-btn").addEventListener('click', () => {
    document.getElementById("cashout").hidden = false;
    document.getElementById("get-bonus").hidden = true;
    document.getElementById("history").hidden = true;
    //hide add money
    //hide transfer money
    // hide other btns
});

document.getElementById("get-bonus-btn").addEventListener('click', () => {
    document.getElementById("get-bonus").hidden = false;
    document.getElementById("cashout").hidden = true;
    document.getElementById("history").hidden = true;
    //hide add money
    //hide transfer money
    // hide other btns
});

document.getElementById("transactions-btn").addEventListener('click', () => {
    if (document.getElementById("history").noHistory === true) {
              
        document.getElementById("no-history").hidden = false;
    }
    else {
        document.getElementById("no-history").hidden = true;
    }
    document.getElementById("history").hidden = false;
    document.getElementById("get-bonus").hidden = true;
    document.getElementById("cashout").hidden = true;
    //hide add money
    //hide transfer money
    // hide other btns
});