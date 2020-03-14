import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './shared/default/default.module';

import { AuthService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPwdComponent } from './auth/reset-pwd/reset-pwd.component';
import { SubmitPwdComponent } from './auth/submit-pwd/submit-pwd.component';
import { AuthComponent } from './auth/auth.component';
// import { BugsComponent } from './modules/bugs/bugs.component';
// import { BugCreateComponent } from './modules/bugs/bug-create/bug-create.component';
// import { BugViewComponent } from './modules/bugs/bug-view/bug-view.component';
// import { BugEditComponent } from './modules/bugs/bug-edit/bug-edit.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { ProjectsModule } from './modules/projects/projects.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ResetPwdComponent,
    SubmitPwdComponent,
    AuthComponent,
    //ProjectDetailsComponent,
    
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ProjectsModule,
    NgxSpinnerModule,
    MatCardModule,
    //NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [AuthService, EmployeeService, ProjectService],
  bootstrap: [AppComponent]

})
export class AppModule { }
