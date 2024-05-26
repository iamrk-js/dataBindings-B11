import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.scss']
})
export class TabSwitchComponent implements OnInit {
  price : string = '5';
  selectedFramework : string = "angular";
  constructor() { }

  ngOnInit(): void {
  }

}
