import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ENDPOINTS } from '../endpoints/rest.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [{
    projectId: 1,
    projectName: "Project 1",
    projectDesc: "Lorem ipsome 11111",
    projectMgr: 1
  },
  {
    projectId: 2,
    projectName: "Project 2",
    projectDesc: "Lorem ipsome 22222",
    projectMgr: 1
  },
  {
    projectId: 3,
    projectName: "Project 3",
    projectDesc: "Lorem ipsome 333333",
    projectMgr: 2
  }
  ];

  constructor(private httpClient: HttpClient) { }

  public getProjects():Observable<Project[]> {
    console.log("hhhhhh");
    return this.httpClient
      //.get<Project[]>("http://localhost:7070/projects")
      .get<Project[]>(ENDPOINTS.GET_ALL_PROJECTS)
      .pipe(map(responseData=>
      { 
        console.log(responseData);
        this.projects=responseData; 
        return responseData
      }));
  }

  // public getProjects():Project[]{
  //   return this.projects;
  // }

  public getSingleProject(id:number):Observable<Project>{
    // let p:Project=null;
    // this.projects.forEach((proj)=>{
    //   if(proj.projectId === id){
    //     p = proj;
    //   }
    // });
    // return p;

    return this.httpClient
    //.get<Project>("http://localhost:7070/project/"+id)
      .get<Project>(ENDPOINTS.GET_PROJECT_DTLS + id)
      .pipe(map(resData=>{return resData;}));
  }


  public getEmpListInProject(projectId:number){
    return this.httpClient
    //.get<any>("http://localhost:7070/employeesDevTest/"+projectId)
      .get<any>(ENDPOINTS.EMP_LIST_IN_PROJECT + projectId)
    .pipe(map(data=>{
      return data;
    }));
  }

  public addProject(proj: Project): Observable<boolean> {
    return this.httpClient
      .post<boolean>(ENDPOINTS.ADD_PROJECT, proj)
      .pipe(
        map(data => {
          if (data === true) {
            return data;
          } else {
            return false;
          }
        })
      );
  }


  public getProjectsOfEmp(empId:number):Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(ENDPOINTS.GET_ALL_EMP_PROJECTS + empId)
      .pipe(map(responseData=>
      { 
        console.log(responseData);
        this.projects=responseData; 
        return responseData
      }));
  }

  public getProjectsOfMgr(empId:number):Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(ENDPOINTS.GET_ALL_MGR_PROJECTS + empId)
      .pipe(map(responseData=>
      { 
        console.log(responseData);
        this.projects=responseData; 
        return responseData
      }));
  }


  public getProjectsOfSupport(empId:number):Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(ENDPOINTS.GET_ALL_SUPPORT_PROJECTS + empId)
      .pipe(map(responseData=>
      { 
        console.log(responseData);
        this.projects=responseData; 
        return responseData
      }));
  }


}
