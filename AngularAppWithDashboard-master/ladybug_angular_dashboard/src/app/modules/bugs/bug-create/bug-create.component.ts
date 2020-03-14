import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeService } from 'src/app/services/employee.service';
import { BugDtls } from 'src/app/models/bug-dtls.model';
import { Employee } from 'src/app/models/employee.model';
import { BugService } from 'src/app/services/bug.service';



@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.css']
})
export class BugCreateComponent implements OnInit {

  mgrName:string;     //Manager name of currently logged in emp (one way form binding - input to form)
  empName: string;     //currently logged in emp name (one way form binding - input to form)
  bugDtls:BugDtls;    //details of the bug which will be entered by the user.
  projectId:number;


  isBugAdded:boolean=false;
  isBugNotAdded: boolean = false;
  resMsg:string = "";

  emp:Employee;       //Currently logged in emp object (from localStorage)

  currentMgr:Employee;

  @ViewChild('f', { static: false }) bugCreateForm: NgForm;
  
  constructor(private empSvc:EmployeeService,
              private bugSvc:BugService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = +this.route.snapshot.params['projectId'];
    this.emp = JSON.parse(localStorage.getItem("user"));

    this.empSvc.getMgrDtls(this.emp.empId).subscribe(emp=>{
      console.log("mgr-->",emp);
      this.currentMgr = emp;
      this.mgrName = emp.firstName+" "+emp.lastName;
      console.log("mgrName-->",this.mgrName);
    });
    this.empName = this.emp.firstName + " " + this.emp.lastName;
  }

  

  onBugAdd(){
    //debugger;
    
    this.bugDtls = {
      bugId: this.currentMgr.empId,
      bugName: this.bugCreateForm.value.bugName,
      bugDesc: this.bugCreateForm.value.bugDesc,
      bugPriority:this.bugCreateForm.value.bugPriority,
      bugMgrId : this.currentMgr.empId,
      emp :{empId: this.emp.empId} ,
      project:{projectId:this.projectId}
    };

    this.bugSvc.saveBugDtls(this.bugDtls).subscribe(data=>{
      this.isBugAdded = data;
      this.isBugNotAdded = !data;
      if(data===true){
        this.bugCreateForm.resetForm();
        this.resMsg="Bug Added Successfully";
      }
      else{
        this.resMsg = "Some Internal Error occured! Try again later...";
      }
    });
  }

}
