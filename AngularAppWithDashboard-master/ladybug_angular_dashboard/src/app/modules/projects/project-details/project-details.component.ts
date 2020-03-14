import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { BugDtls } from 'src/app/models/bug-dtls.model';
import { BugService } from 'src/app/services/bug.service';

import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  proj2:Project[]=[];
  project: Project;
  bugs: BugDtls[]=[];
  empMgr:string;
  empRole:string;

  displayedColumns: string[] = ["bugId", "bugName", "bugStatus", "bugPriority","navigationBtns"];
  dataSource;
  dataSource2;
  displayedColumns2: string[] = ["projectName", "projectDesc", "projectMgr"];
  
  constructor(private svc: ProjectService, private bugSvc: BugService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.empRole = JSON.parse(localStorage.getItem("user")).login.role;
    console.log(this.empRole);
    console.log(id);
    this.svc.getSingleProject(id).subscribe(p=>{
      this.project = p;
      console.log(this.project);
      this.proj2[0]=p;
      this.dataSource2 = new MatTableDataSource(this.proj2);
      //this.bugs = p.bugDtls;
    });

    this.bugSvc.getBugListByProject(id).subscribe(data=>{
      this.bugs = data; 
      this.dataSource = new MatTableDataSource(this.bugs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log("bugs-->", this.bugs);
      console.log(this.dataSource);
    });
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
