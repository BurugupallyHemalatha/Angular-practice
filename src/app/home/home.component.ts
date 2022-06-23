import { Component, OnInit } from '@angular/core';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popup: any;
 
 

  
  ngOnInit(): void {
  }

  openModal(){
    this.popup=!this.popup
    // this.popup.style.popup="show"
  }
  closeModal(){
this.popup=!this.popup
  }
}
