import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,AbstractControl, FormArray } from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-au',
  templateUrl: './au.component.html',
  styleUrls: [ './au.component.scss' ]
})
export class AuComponent {
  name = '';
  values:any = [];
  todoArray: any=[];
  todos: any;
  push:any;
  todoForm: FormGroup;
  cs: any;
  constructor(private fb: FormBuilder,cs:CommonService) {
    this.todoForm =  this.fb.group({
      todo: ''
    });
  }
  
   
  ngOnInit() {
    this.cs.testItem.subscribe((res: any) => {
    
      console.log(res,"test Observed this ios the");
    })

  }

  // createItem() {
  //   return this.fb.group({
  //     firstnames: [''],
  //      lastnames: [''],
  //     // firstname:[],
  //     // lastname:[],
  //   })
  // }
  // removefeild(i: number){
  //   this.values.splice(i,1);
  // }

  // addfeild(){
  //   this.values.push({value:'null'});
  // }
  
//   auForm: FormGroup ;
//   constructor(private fb: FormBuilder) {
//     this.auForm = this.fb.group({
//       // firstname:[],
//       // lastname:[],
//       //  lastnames:[],
//       // firstnames:[],
//       // firstnames: this.formBuilder.array([
//       //   this.formBuilder.control(null)
//       // ]),
//       // lastnames:this.formBuilder.array([
//       //   this.formBuilder.control(null)
//       // ]),
      
//  })
//   }

  // addfeild() {
  //  this.values=this.auForm.get('values') as FormArray;
  //  this.values.push(this.createItem())
    
  // }
  
  // getfirstnameFormControls():AbstractControl[] {
  //   return (<FormArray> this.auForm.get('firstname')).controls
  // }
  // total(){
  //   console.log("this is values:",this.auForm.value)
  // }
  
 
 


   addTodo(value: any){
    if(value!==""){
     this.todoArray.push(value)
     this.todoForm.reset();
    console.log(this.todos) 
  }else{
    alert('Field required **')
  }
    
  }
 
  deleteItem(todo: any){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }

  
  todoSubmit(value: any){
    console.log(this.todoForm)
    if(value!==""){
      this.todoArray.push(value.todo)
    }else{
      alert('Field required **')
    }
   
    
  }
 
}






