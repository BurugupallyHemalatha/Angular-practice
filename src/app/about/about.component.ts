import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ]
})
export class AboutComponent  {
  
  constructor(private fb: FormBuilder , private cs:CommonService){
    this.auForm = this.fb.group({ 
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        
      
  })
  }

  auForm: FormGroup;
  value: any;
  values: any={};
  
  
  
 
  ngOnInit() {
    console.log(this.auForm,"16::;");
    // this.auForm.get("values").valueChanges.subscribe(val => {
    //   if (val === true) {
    //     this.auForm.get("value_value").setValue("yes");

    //     this.auForm.addvalue('rows', this.rows);
    //   }
    //   if (val === false) {
    //     this.auForm.get("items_value").setValue("no");
    //     this.auForm.removevalue('rows');
    //   }
    // });

    
    this.cs.testItem.subscribe((res: any)=>{
      console.log(res,"hello every one this is the data ")
      
    })
 
   
  }

  get f(): { [key: string]: AbstractControl } {
    return this.auForm.controls;
  }
 
  createItem() {
    return this.fb.group({
      name: null,
      lastname: null
     
    })
  }



  removevalue(i: number){
    this.value.removeAt(i);
  }

  addvalue() {
    this.values = this.auForm.get('values') as FormArray;
    this.values.push(this.createItem());
    this.values={};
  }
  total(){
    
    if (this.auForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.auForm.value, null, 2));
   }
}
