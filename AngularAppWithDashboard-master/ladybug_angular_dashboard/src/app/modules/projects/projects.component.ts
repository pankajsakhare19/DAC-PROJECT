import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projArr:Project[];
  employee:Employee;
  empId:number;
  projects:Project[];
  isAdmin:boolean=false;
  role:string;
  constructor(private svc: ProjectService, private router:Router) { }

  ngOnInit() {
    //this.projects = this.svc.getProjects();
   this.role=JSON.parse(localStorage.getItem('user')).login.role;
   this.empId=JSON.parse(localStorage.getItem('user')).empId;
   if(this.role=='ADMIN')
   {
     this.isAdmin=true;
   }

   if(this.role=='ADMIN')
   {
   this.svc.getProjects().subscribe(projs=>{
     this.projArr = projs;

   });
  }else if(this.role=='MANAGER')
  {
    this.svc.getProjectsOfMgr(this.empId).subscribe(projs=>{
      this.projArr = projs;
    });
  }else if(this.role=='SUPPORT')
  {
    this.svc.getProjectsOfSupport(this.empId).subscribe(projs=>{
      this.projArr = projs;
    }); 
  }else if(this.role=='DEVTEST')
  {
    this.svc.getProjectsOfEmp(this.empId).subscribe(projs=>{
      this.projArr = projs;
    });
    
  }
  }

  // onProjectSelect(projectId:number){
  //   console.log(projectId);
  //   console.log(typeof projectId);
  //   this.router.navigateByUrl("/dashboard/projects/"+projectId);
  // }

}
