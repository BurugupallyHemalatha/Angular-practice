import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  popup: boolean = false;
  loginForm: FormGroup;
  submitted:any
  datalogin: any;
  router: any;
  text: any;
  encryptedPassword: any;
  
  constructor(private cs:CommonService ,private fb:FormBuilder) { 
    this.cs.setTestData("this is the login data")
    this.loginForm = this.fb.group({
      email1: [''],
      password: ['',[Validators.required,Validators.minLength(6)]]
  });
  }
 
  ngOnInit(): void {
let data:any = localStorage.getItem('loginData');
    this.datalogin = localStorage.getItem('loginData') ? JSON.parse(data) :'no data';
    console.log(this.datalogin,"27:::")

  
  }
    //  encrypt = (salt:any,text: any) => {
    //   const textToChars = (text: string) => text.split("").map((c: string) => c.charCodeAt(0));
    //   const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
    //   const applySaltToChar = (code: any) => textToChars(salt).reduce((a: number, b: number) => a ^ b, code);
    //   console.log(this.encrypt,"44::::")
    //   return text
    //     .split("")
    //     .map(textToChars)
    //     .map(applySaltToChar)
    //     .map(byteHex)
    //     .join("");
      
    // };
    encrypt(text: any){
      console.log("hello  47:::::");
     
      const textToChars = (text: string) => text.split("").map((c: string) => c.charCodeAt(0));
      const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
      const result= Math.floor(Math.random() * 100) + 1;
     
      
      this.encryptedPassword = text
      .split("")
      .map(textToChars)
      
      .map(byteHex)
     .join(result);
       console.log(result,"58:::")
    } 
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  openModal(){
    this.popup=!this.popup
    // this.popup.style.popup="show"
  }
  closeModal(){
this.popup=!this.popup
  }
  login(){
   var mainData = this.loginForm.value;
  // mainData.password = this.encryptedPassword;
    localStorage.setItem('loginData', JSON.stringify(mainData))
    console.log("VALUE OF THE DATA IS :",this.loginForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
   console.log("47 ::::")

   this.submitted=true;
   this.loginForm.reset();
  if(!this.loginForm.value.email1 && !this.loginForm.value.password){
    this.submitted=true
  }else{
    this.submitted.disable()
  }
  // if(this.loginForm.value.email1 === '' || this.loginForm.value.password === ''){

  // }
  // this.router.navigate(RegistrationComponent)
  }
}    
