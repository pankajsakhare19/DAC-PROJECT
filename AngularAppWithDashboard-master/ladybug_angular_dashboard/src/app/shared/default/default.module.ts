import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from 'ngx-spinner';
// import { SharedModule } from "../shared.module";
import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatListModule
} from "@angular/material";
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { ProjectsComponent } from "src/app/modules/projects/projects.component";
import { EmployeesComponent } from "src/app/modules/employees/employees.component";
//import { ProjectDetailsComponent } from 'src/app/modules/projects/project-details/project-details.component';
//import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Ng8BreadcrumbModule } from 'ng8-breadcrumb';
import { SidebarComponent } from '../sidebar/sidebar.component';
//import { BugsComponent } from 'src/app/modules/bugs/bugs.component';
import { BugCreateComponent } from 'src/app/modules/bugs/bug-create/bug-create.component';
import { BugViewComponent } from 'src/app/modules/bugs/bug-view/bug-view.component';
import { BugEditComponent } from 'src/app/modules/bugs/bug-edit/bug-edit.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { ProjectCreateComponent } from 'src/app/modules/projects/project-create/project-create.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProjectsComponent,
    EmployeesComponent,
   // BreadcrumbComponent,
    SidebarComponent,
    //BugsComponent,
    //BugCreateComponent,
    //BugViewComponent,
    //BugEditComponent,
    RegisterComponent,
   // ProjectCreateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    // SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatCardModule,
    NgxSpinnerModule,
    Ng8BreadcrumbModule.forRoot({
      prefix: 'Home', // default 'false'
    }),
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class DefaultModule {}
