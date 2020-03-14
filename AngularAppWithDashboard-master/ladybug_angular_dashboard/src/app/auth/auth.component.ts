import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user:Employee;
  emailSent:boolean=false;

  constructor(private svc: AuthService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("user"));
    console.log(sessionStorage.getItem("emailSent"));
    if(sessionStorage.getItem("user") == null || sessionStorage.getItem("user") == undefined){
      sessionStorage.setItem("user","");
    }
    if (sessionStorage.getItem("emailSent") == "true") {
      this.emailSent = sessionStorage.getItem("emailSent") == "true";
    }
  }



}
