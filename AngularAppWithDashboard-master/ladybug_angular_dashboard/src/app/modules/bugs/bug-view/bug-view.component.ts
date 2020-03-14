import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BugDtls } from 'src/app/models/bug-dtls.model';
import { BugService } from 'src/app/services/bug.service';

@Component({
  selector: 'app-bug-view',
  templateUrl: './bug-view.component.html',
  styleUrls: ['./bug-view.component.css']
})
export class BugViewComponent implements OnInit {

  bug: BugDtls={bugId:0,bugName:"",bugDesc:"",bugStatus:"",bugMgrId:0,bugPriority:""};
  empName: string="";
  projectId:Number;
  constructor(private bugSvc: BugService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const projectId = +this.route.snapshot.params['projectId'];
    this.projectId=projectId;
    const bugId = +this.route.snapshot.params['bugId'];
    this.bugSvc.getBugById(bugId).subscribe(dataArr=>{
      if(dataArr != false){
        console.log(dataArr);
        this.bug = dataArr[0];
        this.empName = dataArr[1].firstName + " " + dataArr[1].lastName;
      }else{
        
      }
    });
  }

}
