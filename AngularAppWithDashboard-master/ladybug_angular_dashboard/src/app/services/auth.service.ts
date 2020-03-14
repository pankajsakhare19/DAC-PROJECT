import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Employee } from "../models/employee.model";
import { ENDPOINTS } from '../endpoints/rest.endpoints';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  LoggedIn: boolean = JSON.parse(localStorage.getItem("LoggedIn"));
  Role:String;
  constructor(private httpClient: HttpClient) { }
  public employee: Employee;
  localEmp: Employee;
  public isLoggedIn() {
    return this.LoggedIn;
  }

  public logout() {
    this.LoggedIn = false;
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("LoggedIn", JSON.stringify(this.LoggedIn));
  }

  //login validating employee
  public validateUser(email, password) {
    return this.httpClient
      //.post<any>("http://localhost:7070/authenticate", {
      .post<any>(ENDPOINTS.LOGIN, {
        email: email,
        password: password
      })
      .pipe(
        map(data => {
          console.log(data);
          if (data != false) {
            this.employee = data;
            console.log("emp---->" + this.employee);
            console.log(this.employee.firstName);
            console.log(this.employee);
            
            localStorage.clear();
            sessionStorage.clear();
            this.LoggedIn = true;
            localStorage.setItem("LoggedIn", JSON.stringify(this.LoggedIn));
            localStorage.setItem("user", JSON.stringify(this.employee));
            this.localEmp=JSON.parse(localStorage.getItem("user"));
            return true;
          }
          else {
            return false;
          }
          
        })
      );
  }




  // public register(emp: Employee) {
  //   console.log("regiter--->" + emp);
  //   return this.httpClient
  //     .post<any>("http://localhost:7070/register",
  //       emp
  //     )
  //     .pipe(
  //       map(data => {
  //         console.log(data);
  //         if (data === true) {
  //           return data;
  //         } else {
  //           return false;
  //         }
  //       })
  //     );
  // }





  // reset password service layer,sending email to get the link to reset the password

  public resetPwd(email) {
    console.log("in authservice");
    console.log(email);
    return this.httpClient
      //.post<any>("http://localhost:7070/forgot", {
      .post<any>(ENDPOINTS.FORGOT_PASS, {
        email: email
      })
      .pipe(
        map(data => {
          if (data === true) {
            console.log("data in if block ");
            console.log(data);
            return true;
          } else {
            console.log("in data else block");
            return false;
          }
        })
      );
  }

  //submiting new password

  public submitPwd(password, token) {
    console.log("token pass->",token);
    return this.httpClient
      //.post<any>("http://localhost:7070/reset/" + token, {
      .post<any>(ENDPOINTS.RESET_PASS + token, {
        password: password
      })
      .pipe(
        map(data => {
          if (data === true) {
            return true;
          } else {
            return false;
          }
        })
      );
  }

  public getEmployeeRole():string{
    return this.employee.login.role;
  }

  public isAdmin():boolean{
    //console.log(this.employee);
    let emp=JSON.parse(localStorage.getItem("user"));
    return emp.login.role=="ADMIN";
  }
}
