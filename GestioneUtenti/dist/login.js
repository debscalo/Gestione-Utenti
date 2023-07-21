"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userList = void 0;
;
;
let credenziali = [
    {
        email: "ciao@email.com",
        password: "ciao"
    }
];
exports.userList = [
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
let butttonSignIn = document.getElementById('signIn');
debugger;
function redirect() {
    window.location.href = "login.html";
}
let login = document.getElementById("login");
login === null || login === void 0 ? void 0 : login.addEventListener("click", verificaDatiInseriti);
