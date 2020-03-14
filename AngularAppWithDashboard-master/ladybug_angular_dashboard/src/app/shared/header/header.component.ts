import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public authService: AuthService, private router: Router) { }

  userRole: string = "";

  ngOnInit() {
    console.log("ng on init-->" + this.userRole);
    if (localStorage.getItem("user") != null) {
      this.userRole = JSON.parse(localStorage.getItem("user")).login.role;
      console.log("ng on init-->" + this.userRole);
    }
  }

  logout() {
    this.authService.logout();
    this.userRole = "";
    console.log("LoggedIn--->" + this.authService.LoggedIn);
    this.router.navigateByUrl("/");
  }

  isLoggedIn(): boolean {
    if (this.authService.isLoggedIn() && localStorage.getItem("user") == null) {
      this.userRole = this.authService.getEmployeeRole();
    }
    //this.userRole = JSON.parse(sessionStorage.getItem("user")).login.role;
    return this.authService.isLoggedIn();
  }

  getUserRole() {
    return JSON.parse(localStorage.getItem("user")).login.role;
  }


}

