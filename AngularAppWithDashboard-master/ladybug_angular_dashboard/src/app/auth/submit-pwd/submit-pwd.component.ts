import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-submit-pwd",
  templateUrl: "./submit-pwd.component.html",
  styleUrls: ["./submit-pwd.component.css"]
})
export class SubmitPwdComponent implements OnInit {
  newPassword = "";
  confirmPassword = "";
  inValidPassword = false;

  constructor(private authService: AuthService, private router: Router) { }
  token;
  ngOnInit() {
    this.token = window.location.pathname.split("/");
    console.log("tokennnn")
    console.log(this.token[3]);
  }

  submitPwd() {
    if (this.newPassword === this.confirmPassword) {
      console.log(this.newPassword)
      console.log(this.confirmPassword)
      console.log(this.token)
      this.authService
        .submitPwd(this.confirmPassword, this.token[3])
        .subscribe(data => {
          if (data == true) {
            this.inValidPassword = false;
            console.log("Password changed successfully");
            this.router.navigateByUrl("/login");
          } else {
            this.inValidPassword = true;
          }
        });
    } else {
      console.log("Password mismatch");
      this.inValidPassword = true;
      //this.router.navigateByUrl("/auth/reset");
    }
  }
}
