
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

export let userList: User[] = [
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





let butttonSignIn = document.getElementById('signIn');
debugger;

function redirect(){
    window.location.href = "login.html";
}


let login = document.getElementById("login");
login?.addEventListener("click", verificaDatiInseriti)