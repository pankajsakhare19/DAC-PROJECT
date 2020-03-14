import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BugService } from 'src/app/services/bug.service';
import { BugDtls } from 'src/app/models/bug-dtls.model';
import { Employee } from 'src/app/models/employee.model';
import { ProjectService } from 'src/app/services/project.service';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {
  
  projectId:Number;

  bug: BugDtls = { bugId: 0, bugName: "", bugDesc: "", bugStatus: "", bugMgrId: 0, bugPriority: "" };
  empName: string = "";

  @ViewChild('f', { static: false }) bugEditForm: NgForm;

  currentEmp: Employee; //currently logged in employee

  statusArray:string[]=[
    "NEW", "INPROGRESS", "FIXED", "CLOSED"
  ];

  assignee:string;

  projEmployees: Employee[]=[];

  isStatusChanger:boolean = false;
  isBugAssigner: boolean = false;
  isNone = false;
  isBugIssuer:boolean=false;

  constructor(private bugSvc: BugService, private projSvc: ProjectService,private empService:EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentEmp = JSON.parse(localStorage.getItem("user"));
    const projectId = +this.route.snapshot.params['projectId'];
    this.projectId=projectId;
    const bugId = +this.route.snapshot.params['bugId'];
    this.bugSvc.getBugById(bugId).subscribe(dataArr => {
      if (dataArr != false) {
        console.log("data--->",dataArr);
        this.bug = dataArr[0];
        this.empService.getEmpDtls(this.bug.bugAssignee).subscribe(res=>{
          this.assignee=res.firstName + " "+res.lastName;
        });
        this.empName = dataArr[1].firstName + " " + dataArr[1].lastName;
        console.log(dataArr[1]);
        if(dataArr[1].empId == this.currentEmp.empId)
        {
          this.isBugIssuer=true;
        }
        if(this.bug.bugStatus == 'NEW'){
          // this.bug.bugStatus = 'INPROGRESS';
          this.statusArray = ["NEW","INPROGRESS"];  //After New the status can be INPROGRESS
        }
        if(this.currentEmp.login.role === "SUPPORT" && this.bug.bugStatus === "NEW"){
          this.isBugAssigner=true;
        } else if (this.currentEmp.login.role === "DEVTEST" && (this.bug.bugAssignee === this.currentEmp.empId || dataArr[1].empId === this.currentEmp.empId)){
          this.isStatusChanger=true;
        }else{
          this.isNone = true;
        }
        console.log(this.isNone);
        console.log(this.isBugAssigner);
        console.log(this.isStatusChanger);
        //debugger;
      } else {

      }
    });

    this.projSvc.getEmpListInProject(projectId).subscribe(empArr=>{
      if(empArr != false){

        this.projEmployees=empArr;
      }
    })
  }

  public onBugEdit(){
    
    if(this.isBugAssigner){           //support employee
      this.bug.bugAssignee = +this.bugEditForm.value.bugAssignee;
      this.bug.bugStatus = this.bugEditForm.value.status;
      this.bug.bugPriority=this.bugEditForm.value.bugPriority;
      console.log("going to update--->"+this.bug)
    }else if(this.isStatusChanger){   //DEVTEST or support
      // this.bug.bugStatus = this.bugEditForm.value.status;
      this.bug.bugStatus = this.bugEditForm.value.bStatus;
      this.bug.bugPriority=this.bugEditForm.value.bugPriority;
      console.log("else if going to update--->"+this.bug.bugStatus)
      // if (this.bugEditForm.value.status == ""){
        
      // }
    }
    this.bugSvc.updateBugDtls(this.bug).subscribe(data=>{
      if(data){
        console.log("successfully updated!!");
      }else{
        console.log("NOT success!");
      }
    });
    console.log("bug-->",this.bug);
  }

}
