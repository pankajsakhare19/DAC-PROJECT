import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  @ViewChild('f', { static: false }) projectCreateForm: NgForm;

  constructor(private projectService: ProjectService,
    private router: Router,
    private employeeService: EmployeeService) { }

  isProjectAdded:boolean=false;
  isProjectNotAdded: boolean = false;
  resMsg:string = "";  

  project: Project;
  // ={
  //   projectName:"",
  //   projectDesc:"",
  //   projectMgr:null
  // };

  manager: Employee[];
  employee: Employee = {
    empMgr: {
      empId: null
    },
    firstName: "",
    lastName: "",
    userName: "",
    login: {
      email: "",
      emp: null,
      password: "",
      role: ""
    }
  };


  ngOnInit() {
    this.employeeService.getManagers().subscribe(data => {
      this.manager = data;
      console.log(this.manager);
    });
  }


  onSubmit() {

    this.project = {
      projectName: this.projectCreateForm.value.projectName,
      projectDesc: this.projectCreateForm.value.projectDesc,
      projectMgr: this.projectCreateForm.value.projectMgr
    };

    console.log(this.project);
    this.projectService.addProject(this.project).subscribe(data => {
      this.isProjectAdded=data;
      this.isProjectNotAdded=!data;
      if(data==true){
        this.projectCreateForm.resetForm();
        this.resMsg="Project Added Successfully";
      }else{
        this.resMsg = "Some Internal Error occured! Try again later...";
      }



    });
  }

}
