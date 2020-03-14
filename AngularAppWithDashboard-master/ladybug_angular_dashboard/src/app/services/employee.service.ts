import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Employee } from "../models/employee.model";
import { ENDPOINTS } from '../endpoints/rest.endpoints';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}

  public getEmpDtls(empId: number): Observable<Employee> {
    return this.httpClient
      //.get<Employee>("http://localhost:7070/empMgr/" + empId)
      .get<Employee>(ENDPOINTS.EMP_DETAILS + empId)
      .pipe(
        map(resData => {
          console.log(resData);
          return resData;
        })
      );
    }

  public getMgrDtls(empId: number): Observable<Employee> {
    return this.httpClient
      //.get<Employee>("http://localhost:7070/empMgr/" + empId)
      .get<Employee>(ENDPOINTS.MGR_DETAILS + empId)
      .pipe(
        map(resData => {
          console.log(resData);
          return resData;
        })
      );
  }

  public getEmployeeList(){
    return this.httpClient
    //.get<Employee[]>("http://localhost:7070/employees")
    .get<Employee[]>(ENDPOINTS.EMP_LIST)
    .pipe(
      map(resData=>{
        console.log(resData);
        resData.forEach(emp => {
          emp.userName = emp.login.email.split("@")[0];
        });
        return resData;
      })
    )
  }

  employees: Employee[];

  public getEmployees() {
    return this.employees;
  }

  public getManagers() {
    return this.httpClient
      //.get<Employee[]>("http://localhost:7070/manager")
      .get<Employee[]>(ENDPOINTS.MGR_LIST)
      .pipe(
        map(data => {
          return data;
        })
      );
  }
  
  public register(employee:Employee) {
    console.log(employee);

    return this.httpClient
      //.post<any>("http://localhost:7070/register", 
      .post<any>(ENDPOINTS.REGISTER_EMP, 
        employee
      )
      .pipe(
        map(data => {
          console.log(data);
          if (data === true) {
            return data;
          } else {
            return false;
          }
        })
      );
  }
  
}
