import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: [ './apply.component.scss' ]
})
export class ApplyComponent  {

  constructor(private cs: CommonService) {

  }

  ngOnInit() {
    this.cs.testItem.subscribe(res => {
    
      console.log(res,"test Observed i got ");
    })
  }

 course: Array<any> = [];
  newItem: any = {};
  option = [
    {name: "Please Select course...",},
    {name: "EEE"},
    {name: "Mech" },
    {name: "CSE"},
    {name: "Cevil"},
 
  ];
  options = [
    {name: "Please Select course...",},
    {name: "EEE"},
    {name: "Mech" },
    {name: "CSE"},
    {name: "Cevil"},
    {name:""}
  ];

  addCourse() {
    this.course.push(this.newItem);
    console.log(this.course);
    this.newItem = {};
  }

  removeCourse(index: number) {
    this.course.splice(index, 1); // remove 1 item at ith place
  }

}
