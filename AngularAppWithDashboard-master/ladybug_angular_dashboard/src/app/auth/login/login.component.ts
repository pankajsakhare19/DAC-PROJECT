import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  invalidLogin = false;
  constructor(private authService: AuthService, private router: Router) {}

  emailSent:boolean=false;

  ngOnInit() {


    console.log("email status-->", sessionStorage.getItem("emailSent"));
    if(sessionStorage.getItem("emailSent") == "true"){
      this.emailSent = sessionStorage.getItem("emailSent") == "true";
      sessionStorage.setItem("emailSent","");
    }
    
    // else{
    //   this.emailSent=false;
    // }
  }

  checkLogin() {
    this.authService
      .validateUser(this.email, this.password)
      .subscribe(data => {
        if (data == true) {
          this.invalidLogin = false;
          console.log("success")
          this.router.navigateByUrl("/dashboard");
        } else {
          console.log("bye")
          console.log(data)
          
          this.invalidLogin = true;
        }
      });
  }
  

  // checkLogin(){
  //   if(this.username=="bhanu@gmail.com" && this.password=="bhanu"){
  //     console.log("Hello")
  //     this.invalidLogin = false;
  //     this.router.navigateByUrl("/register");
  //   }else{
  //     this.invalidLogin = true;
  //     console.log("bye")
  //   }
  // }

}
