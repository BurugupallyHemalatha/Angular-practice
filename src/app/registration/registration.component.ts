import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators, FormControl, AbstractControl, FormArray } from  '@angular/forms';
import { CommonService } from '../common.service';

 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  sub= 'null';
  submitted = false ;
  registrationForm!: FormGroup;
  url!: "";
  profilePic: any = 'https://tinyurl.com/kdc5vlp';
  value: any;
  gender: any;
 
  //  fb: FormBuilder = new FormBuilder;
  FormBuilder: any;
  dataRegistration: any;
 


  constructor(private fb: FormBuilder,private cs:CommonService) {
    
 
   /*  this.registrationForm=new FormGroup({
      fullname:new FormControl,
      lastname:new FormControl,
      email:new FormControl,
      Passowrd:new FormControl,
      ConformPassowrd :new FormControl,
      DateOfBirth:new FormControl,
      Phonenumber:new FormControl,
      gender:new FormControl,
    }) */
 }

  ngOnInit() {

        this.cs.setTestData( this.registrationForm )

        let data:any = localStorage.getItem('registrationData');
    this.dataRegistration = localStorage.getItem('registrationData') ? JSON.parse(data) :'no data';
    console.log(this.dataRegistration,"27:::")

     this.profilePic = localStorage.getItem('profile') ? localStorage.getItem('profile') : "https://tinyurl.com/kdc5vlp";
      this.registrationForm = this.fb.group({

        fullname: ['', Validators.required],
        lastname:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        Passowrd:['',[Validators.required,Validators.minLength(6)]],
        ConformPassowrd :[ '',Validators.required],
        DateOfBirth:[ '',Validators.required],
        Phonenumber:[ '',Validators.required],
        gender:[ '',Validators.required],
        checked:['',Validators.required],
       }, {
      //  validators: MustMatch('password', 'confirmPassword')
      
      });

      
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
 

   pic(){
       var upload=document.createElement("input")
       upload.type='file';
       upload.style.display='none';
       upload.click()
       var time=setInterval(() => {
         if(upload && upload.files && upload.files.length > 0) {
              var reader:any =new FileReader()
              reader.readAsDataURL(upload.files[0])
              console.log(reader, upload.files);
                setTimeout(() => {
                  this.profilePic = reader['__zone_symbol__originalInstance']['result'];
                  localStorage.setItem('profile', this.profilePic)
                }, 500);
           clearInterval(time);
         }
       },500)
   }
    
    
   cnfm(){ 
    if (this.registrationForm.invalid) {
      
     
   }   
   localStorage.setItem('registrationData', JSON.stringify(this.registrationForm.value))
     console.log("VALUE OF THE DATA IS :",this.registrationForm.value);
     this.sub= 'null';
   this.submitted=true;
   confirm("reset can u plz.....")
  // this.registrationForm=!''?this.submitted:!this.submitted;
   
   
   

   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value));
      
}
onReset() {
  this.submitted=false;
  this.registrationForm.reset();
  console.log("hello this is the cancel")
  confirm("reset can u plz.....")
}
}





