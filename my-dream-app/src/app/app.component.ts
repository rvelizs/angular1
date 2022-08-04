import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  newHobby(hobby : any) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}