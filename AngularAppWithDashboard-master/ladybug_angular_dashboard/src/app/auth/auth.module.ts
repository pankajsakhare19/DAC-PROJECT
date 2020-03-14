import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { SubmitPwdComponent } from './submit-pwd/submit-pwd.component'


@NgModule({
  declarations: [
    LoginComponent,
    ResetPwdComponent,
    SubmitPwdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
