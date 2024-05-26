import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedFramWork : string = 'vue'
  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(eve : Event){
    this.selectedFramWork = (eve.target as HTMLAnchorElement).dataset['framework'] as string
    // console.log(val);
    // this.selectedFramWork = val
  }

}
