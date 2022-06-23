import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent {
  title = 'my-angular1';
  submitfunction(){
   console.log("yes you have to submit" )
     alert("yes you have to submit ok!!!!!!!!")
  }
 
}