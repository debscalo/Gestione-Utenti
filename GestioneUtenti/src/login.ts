import { credenziali } from singup;
interface Login {
    email: string
    password: string;
}; 

interface User {
    name: string,
    surname: string
    address: string,
    city: string,
    state: string,
    zip: string
};

function verificaDatiInseriti(){
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    for (let i = 0 ; i< credenziali.lenght;i++){
        if (credenziali[i].email== email.value && credenziali[i].password== password.value){
            window.location.href = 'home.html'
        }
    }

}





let butttonSignIn= document.getElementById('signIn');
if(butttonSignIn)
butttonSignIn.addEventListener('click', function(){
    window.location.href = 'login.html'
});


let login = document.getElementById("login");
login?.addEventListener("click",verificaDatiInseriti)