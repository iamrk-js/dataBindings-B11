import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../models/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() getFair !: Ifair;
  @Output() emmitFairDetail : EventEmitter<Ifair> = new EventEmitter<Ifair>()
  constructor() { }

  ngOnInit(): void {
  }
  onFairClick(){
    // console.log(this.getFair);
    this.emmitFairDetail.emit(this.getFair)
  }
}
