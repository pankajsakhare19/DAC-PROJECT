import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/services/employee.service";
import { Employee } from "src/app/models/employee.model";
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from "@angular/forms";
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private projectService: ProjectService
  ) {}

  projectList:Project[] = [];

  selectedItems:Project[] = [];
  dropdownSettings:IDropdownSettings = {};
  //employee:Employee;
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
  currentEmp: Employee;

  ngOnInit() {
    this.currentEmp = JSON.parse(localStorage.getItem('user'));
    this.employeeService.getManagers().subscribe(data => {
      this.manager = data;
      console.log(this.manager);
    });

    this.projectList = [];
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'projectId',
      textField: 'projectName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    //this.getAllProject();
  }
  onItemSelect(item: any) {
    console.log(item);
    this.selectedItems.push(item);
  }
  onSelectAll(items: any) {
    console.log(items);
    this.selectedItems = items;
  }

  onRoleSelected(value:string){
      console.log("the selected value is "+ value);
      if(value == 'MANAGER')
      {
        this.getAllProject();
      }
      else if(value=='DEVTEST' || value=='SUPPORT')
      {
        console.log();
        this.projectList=[];
      }
  }

  onMgrSelected(value:string){              //IF ROLE IS EITHER SUPPORT OR DEVTEST THEN ON THE SEL OF MANAGER PROJECTS WILL BE FETCHED
    console.log("mgr selected is "+value);
    this.getMgrProjects(+value);
  }
  

  onSubmit() {
    console.log(this.selectedItems);
    this.employee.projects = this.selectedItems;
    console.log(this.employee.projects);
    if(this.currentEmp.login.role=='ADMIN')
    {
      this.employee.empMgr.empId = this.currentEmp.empId;
    }
    this.employee
    this.employeeService.register(this.employee).subscribe(data => {
      if (data == true) {
        console.log("success");
        this.router.navigateByUrl("/login");
      } else {
        console.log(data);
      }
    });
    console.log(this.employee);
  }

  getAllProject(){
    let projs:Project[]=[];
    this.projectService.getProjects().subscribe(data =>{
      if(data!=null)
      {
        data.forEach(d=>{
          if(d.projectMgr==null || d.projectMgr==undefined)
          {
            console.log("inside if");
            projs.push(d);
            console.log(projs);
          }
        });
        this.projectList=projs;
      }
      else{
        console.log(data);
      }
    })
  }

  getMgrProjects(id:number){
    let projs:Project[]=[];
    this.projectService.getProjects().subscribe(data =>{
      
      if(data!=null)
      {
        data.forEach(d=>{
          if(d.projectMgr==id)
          {
            console.log("inside if");
            projs.push(d);
            console.log(projs);
          }
        });
        this.projectList=projs;
      }
      else{
        console.log(data);
      }
    })
  }

}
