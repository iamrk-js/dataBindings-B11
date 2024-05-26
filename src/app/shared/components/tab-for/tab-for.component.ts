import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {

  selectedFrameWork: string = 'angular'
  tabArr: Array<Itab> = [
    {
      tabTitle: 'angular 10',
      tabContent: '<p class="m-0 alert alert-info"><strong>Angular</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis corporis omnis, excepturi ipsam magni ducimus adipisci possimus est dolorem, ipsum sint error amet? Dignissimos!</p>'
    },
    {
      tabTitle: 'react',
      tabContent: '<p class="m-0 alert alert-info"><strong>React</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis corporis omnis, excepturi ipsam magni ducimus adipisci possimus est dolorem, ipsum sint error amet? Dignissimos!</p>'
    },
    {
      tabTitle: 'vue',
      tabContent: '<p class="m-0 alert alert-info"><strong>Vue</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis corporis omnis, excepturi ipsam magni ducimus adipisci possimus est dolorem, ipsum sint error amet? Dignissimos!</p>'
    },
    {
      tabTitle: 'sveltejs',
      tabContent: '<p class="m-0 alert alert-info"><strong>sveltejs</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis corporis omnis, excepturi ipsam magni ducimus adipisci possimus est dolorem, ipsum sint error amet? Dignissimos!</p>'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClickTab(val: string) {
    console.log(val);
    this.selectedFrameWork = val;
  }
}
