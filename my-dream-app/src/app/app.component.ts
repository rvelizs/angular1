import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan', 'joe', 'cameron', 'john'];
  activated = false;
  title = 'my-dream-app';
  name : string;
  email; // : string;
  webpage : string;
  hobbies: string[];
  showHobbies : boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Carlo Jose Luis";
    this.email = "ccorrales@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Programación", "Netflix"];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies =! this.showHobbies;
  }

    sayHello() {
    alert("Hola desde app.component");
  }

  addUser(newUser : any) {
    this.users.push(newUser.value);
    newUser.value = "";
    newUser.focus();
    return false;
  }

  deleteUser(user : any) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}