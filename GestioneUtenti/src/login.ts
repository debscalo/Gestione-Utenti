import { credenziali } from singup;

function verificaDatiInseriti(){
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    for (let i = 0 ; i< credenziali.lenght;i++){
        if (credenziali[i].email== email.value && credenziali[i].password== password.value){
            window.location.href = 'home.html'
        }
    }

}



let login = document.getElementById("login");
login?.addEventListener("click",verificaDatiInseriti)