interface UserData {
    name: string;
    surname: string;
    address: string;
    city: string;
    zip: string;
    date: Date;
  }
 class UserDataMAnagement {
    private userData: UserData[];
  
    constructor() {
      this.userData =  [
        {
            name: "Giovanni",
            surname: "Rossi",
            address: "Via Marte, 15",
            city: "Roma",
            zip: "00159",
            date: new Date("1984-04-20")
        },
        {
            name: "Aldo",
            surname: "Verdi",
            address: "Via Marte, 15",
            city: "Roma",
            zip: "00159",
            date: new Date("1984-04-20")
        },       
         {
            name: "Giacomo",
            surname: "Gialli",
            address: "Via Marte, 15",
            city: "Roma",
            zip: "00159",
            date: new Date("1984-04-20")
        }
    ]   ;
    }
  
    getUsers(): UserData[] {
      return this.userData;
    }
  
    setUsers(userData: UserData) {
      this.userData.push(userData);
    }
    searchUser(stringaRicerca: string): UserData[] {
        let foundUsers = [];
        for (let i = 0; i < this.userData.length; i++) {
          if (this.userData[i].surname.includes(stringaRicerca)) {
            foundUsers.push(this.userData[i]);
          }
        }
        return foundUsers;
      }
  
  }
 let userDataManagement = new UserDataMAnagement();
  
  
  
 

function userListRender() { 
    
    let dati = document.querySelector(".usersList"); 
    if (dati != null) 
        dati.innerHTML = "";
        let searchForm = document.getElementById("mySearch") as HTMLInputElement;
        let stringa = searchForm.value;
        let users =  userDataManagement.searchUser(stringa) 
                users.forEach(elem => { 
        let listaItem = document.createElement("div"); 
        listaItem.setAttribute("class", "row"); 
        listaItem.setAttribute("name", "userList"); 
        listaItem.setAttribute("id", elem.name.toString()) 
        listaItem.innerHTML = `<div class="col" id="name">${elem.name}</div> 
        <div class="col" id="surname">${elem.surname}</div>  
        <div class="col" id="address">${elem.address}</div>  
        <div class="col" id="city">${elem.city}</div> 
        <div class="col" id="zip">${elem.zip}</div> 
        <div class="col" id="date">${elem.date}</div>`; 
        if (dati != null) 
            dati.appendChild(listaItem); 
    }); 
 
}




userListRender();


let searchForm = document.getElementById("mySearch");
if (searchForm !== null)
  searchForm.addEventListener("input", userListRender);
