import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataBindings';
  skills : Array<string> = ['HTML5', "CSS3", "JS", "TS", "Angular"];

  stdArr = [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jhon@gmail.com",
      contact : 1234567890
    },
    {
      fname : "James",
      lname : "Doe",
      email : "james@gmail.com",
      contact : 64355777899
    },
    {
      fname : "May",
      lname : "Doe",
      email : "may@gmail.com",
      contact : 1234567890
    },
    {
      fname : "June",
      lname : "Doe",
      email : "june@gmail.com",
      contact : 7894561230
    },
  ]
}
