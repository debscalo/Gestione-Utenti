
interface Login {
    email: string
    password: string;
};

interface User {
    name: string,
    surname: string
    address: string,
    city: string,
    zip: string,
    date: Date
};

let credenziali: Login[] = [
    {
        email: "ciao@email.com",
        password: "ciao"
    }
]

 let userList: User[] = [
    {
        name: "Giovanni",
        surname: "Rossi",
        address: "Via Marte, 15",
        city: "Roma",
        zip: "00159",
        date: new Date("1984-04-20")
    }
]

function verificaDatiInseriti() {
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    for (let i = 0; i < credenziali.length; i++) {
        if (credenziali[i].email == email.value && credenziali[i].password == password.value) {
            window.location.href = 'home.html'
        }
    }

}

function addUser() {
    let inputName = document.getElementById("name") as HTMLInputElement;
    let inputSurname = document.getElementById("surname") as HTMLInputElement;
    let inputAddress = document.getElementById("inputAddress") as HTMLInputElement;
    let inputCity = document.getElementById("inputCity") as HTMLInputElement;
    let inputZip = document.getElementById("inputZip") as HTMLInputElement;
    let inputDate = document.getElementById("date") as HTMLInputElement;

    let newUser: User = {
        name: inputName.value,
        surname: inputSurname.value,
        address: inputAddress.value,
        city: inputCity.value,
        zip: inputZip.value,
        date: new Date(inputDate.value)
    }

    userList.push(newUser);
    addLogin();
    setTimeout(redirect, 1000);
}

function addLogin(){
    let inputEmail = document.getElementById("inputEmail4") as HTMLInputElement;
    let inputPassword = document.getElementById("inputPassword4") as HTMLInputElement;

    let newLogin: Login = {
        email: inputEmail.value,
        password: inputPassword.value
    }

    credenziali.push(newLogin);
}


let butttonSignIn = document.getElementById('signIn');
debugger;

function redirect(){
    window.location.href = "login.html";
}


let login = document.getElementById("login");
login?.addEventListener("click", verificaDatiInseriti)