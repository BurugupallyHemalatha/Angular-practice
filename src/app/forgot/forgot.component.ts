import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  clicking(){
    console.log("this is the function from",)
    alert("hello every one this is the contact")
  }
  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

}
