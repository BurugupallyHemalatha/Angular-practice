import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted: false = false;
  
  constructor(private fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
   fname: ['', Validators.required],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  
  contactSubmit(){
    alert("helllo this is the contact form")
  }
clicking(){
    console.log("this is the function from",)
    alert("hello every one this is the contact")
  }
}
