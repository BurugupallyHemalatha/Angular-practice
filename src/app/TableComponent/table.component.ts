import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { elementAt } from 'rxjs';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  constructor(private  cs: CommonService) {

  }
  // totalData: MatTableDataSource<Data> = new MatTableDataSource(Data);
   displayedColumns = ['position', 'name', 'Role','Status'];

   totalData =Data;
   closeing: boolean =false;
   opening:boolean=false;
   modal: any;
   editRowIndex:any ;
  //editNoIndex: boolean=false;
  //editNoIndex2: boolean=false;
  editNoIndex:any
  nameModal: any;
  editStatusIndex: any;
  statusModal: any;
  
ngOnInit(): void {
  
this.cs.setTestData(Data)
  
}
edit(){
    console.log();
   
     
  }

clickNumber(name:any,j:any ){
  //this.editNoIndex=!this.editNoIndex;
   this.editNoIndex=j;
  console.log(name)
  this.nameModal=name;
}
clickText(){
   //this.editNoIndex=!this.editNoIndex;
}

numbersave(element:any){
  
  //this.editNoIndex=!this.editNoIndex;
  this.editNoIndex=undefined
  element.name=this.nameModal;
}







  clickRole(Role:any, i:any){
    this.editRowIndex = i;
    console.log(Role)
  //this.closeing=!this.opening;
    //this.opening=!this.closeing
    this.modal = Role;
 
    //this.opening=!this.opening;

  }
  openclick(){
     this.closeing=!this.opening
  //this.opening=!this.closeing
   
  }
  save(element:any){
    element.Role = this.modal;
    this.editRowIndex = undefined;
    // this.closeing=!this.opening
    this.opening = false;

     //this.opening=!this.opening
     //this.closeing=!this.closeing
  }
  clickStatus(Status:any,s:any){
    console.log(Status)
    this.editStatusIndex=s;
    this.statusModal=Status;
  }
  statusSave(element:any){
   this.editStatusIndex=undefined;
   element.Status=this.statusModal
  }
  openStatus(){

  }
    
} 

export interface PeriodicElement {
  name: string;
  position: number;
  Role: string;
  Status:string
}

const Data: PeriodicElement[] = [
    {position: 1, name: 'Shiva',   Role: 'HR',Status:'Working'},
    {position: 2, name: 'Vijay',   Role:  'developer',Status:'Working'},
    {position: 3, name: 'Sai', Role: 'developer',Status:'Working'},
    {position: 4, name: 'Suresh', Role: 'developer',Status:'Working'},
    {position: 5, name: 'Naveen',  Role: 'developer',Status:'Working'},
    {position: 6, name: 'Arjun',  Role: 'HR',Status:'Working'},
    {position: 7, name: 'Jagadeesh',  Role: 'developer',Status:'Working'},
    {position: 8, name: 'Sandeep', Role: 'developer',Status:'Working'},
    {position: 9, name: 'Ajay',  Role: 'developer',Status:'Working'},
    {position: 10, name: 'Sandeep', Role: 'fullstack developer',Status:'Working'},
    {position: 11, name: 'Shiva',   Role: 'HR',Status:'Working'},
    {position: 12, name: 'Vijay',   Role:  'developer',Status:'Working'},
    {position: 13, name: 'Sai', Role: 'developer',Status:'Working'},
    {position: 14, name: 'Suresh', Role: 'developer',Status:'Working'},
    {position: 15, name: 'Naveen',  Role: 'developer',Status:'Working'},
    {position: 16, name: 'Arjun',  Role: 'HR',Status:'Working'},
    {position: 17, name: 'Jagadeesh',  Role: 'developer',Status:'Working'},
    {position: 18, name: 'Sandeep', Role: 'developer',Status:'Working'},
    {position: 19, name: 'Ajay',  Role: 'developer',Status:'Working'},
    {position: 20, name: 'Sandeep', Role: 'fullstack developer',Status:'Working'},
  ];

  
