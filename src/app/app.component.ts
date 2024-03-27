import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataBindings';
  skills : Array<string> = ['HTML5', "CSS3", "JS", "TS", "Angular"]
}
