"use strict";
;
;
let credenziali = [
    {
        email: "ciao@email.com",
        password: "ciao"
    }
];
let userList = [
    {
        name: "Giovanni",
        surname: "Rossi",
        address: "Via Marte, 15",
        city: "Roma",
        zip: "00159",
        date: new Date("1984-04-20")
    }
];
function verificaDatiInseriti() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    for (let i = 0; i < credenziali.length; i++) {
        if (credenziali[i].email == email.value && credenziali[i].password == password.value) {
            window.location.href = 'home.html';
        }
    }
}
function addUser() {
    let inputName = document.getElementById("name");
    let inputSurname = document.getElementById("surname");
    let inputAddress = document.getElementById("inputAddress");
    let inputCity = document.getElementById("inputCity");
    let inputZip = document.getElementById("inputZip");
    let inputDate = document.getElementById("date");
    let newUser = {
        name: inputName.value,
        surname: inputSurname.value,
        address: inputAddress.value,
        city: inputCity.value,
        zip: inputZip.value,
        date: new Date(inputDate.value)
    };
    exports.userList.push(newUser);
    addLogin();
    setTimeout(redirect, 1000);
}
function addLogin() {
    let inputEmail = document.getElementById("inputEmail4");
    let inputPassword = document.getElementById("inputPassword4");
    let newLogin = {
        email: inputEmail.value,
        password: inputPassword.value
    };
    credenziali.push(newLogin);
}
let butttonSignIn = document.getElementById('signIn');
debugger;
function redirect() {
    window.location.href = "login.html";
}
let login = document.getElementById("login");
login === null || login === void 0 ? void 0 : login.addEventListener("click", verificaDatiInseriti);
