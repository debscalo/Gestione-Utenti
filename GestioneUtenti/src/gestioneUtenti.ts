export interface UserData {
    name: string;
    surname: string;
    address: string;
    city: string;
    zip: string;
    date: Date;
  }
export class UserDataMAnagement {
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
        }]   ;
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