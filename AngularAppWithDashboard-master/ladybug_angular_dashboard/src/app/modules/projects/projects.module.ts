import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  MatListModule,
  MatToolbarModule
} from "@angular/material";
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BugsComponent } from '../bugs/bugs.component';
import { BugCreateComponent } from '../bugs/bug-create/bug-create.component';
import { BugViewComponent } from '../bugs/bug-view/bug-view.component';
import { BugEditComponent } from '../bugs/bug-edit/bug-edit.component';
import { ProjectCreateComponent } from './project-create/project-create.component';



@NgModule({
  declarations: [
    ProjectDetailsComponent,
    BugsComponent,
    BugCreateComponent,
    BugViewComponent,
    BugEditComponent,
    ProjectCreateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
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
    MatCardModule
  ]
})
export class ProjectsModule { }
