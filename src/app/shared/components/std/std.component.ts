import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.scss']
})
export class StdComponent implements OnInit {
  stdArr: Array<Istd> = [
    {
      fname: 'Jhon',
      lname: "Doe",
      email: "jhon@gmail.com",
      contact: 12345607654
    }
  ]

  @ViewChild("fname") fname !: ElementRef ;
  @ViewChild("lname") lname !: ElementRef ;
  @ViewChild("email") email !: ElementRef ;
  @ViewChild("contact") contact !: ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }
  // onStdAdd(fname: HTMLInputElement, lname: HTMLInputElement, email: HTMLInputElement, contact: HTMLInputElement) {

  //   // console.log(fname);
  //   // console.log(lname);
  //   // console.log(email);
  //   // console.log(contact);

  //   if (fname.value && lname.value && email.value && contact.value) {
  //     let newstd: Istd = {
  //       fname: fname.value,
  //       lname: lname.value,
  //       email: email.value,
  //       contact: +contact.value
  //     }
  //     console.log(newstd);
  //     fname.value = lname.value = email.value = contact.value = '';
  //     this.stdArr.push(newstd)
  //   }

  // }


  onStdAdd(){
      // let newStd : Istd = {
      //   fname : this.fname
      // }
  }
}


