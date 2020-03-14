import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng8-breadcrumb';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  breadcrumbDisplay:boolean;

  constructor(private _breadcrumb: BreadcrumbService, private spinner:NgxSpinnerService) { }

  ngOnInit() {

    
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.breadcrumbDisplay = true;
    console.log("breadcrumbDisplay-->",this.breadcrumbDisplay);
    // this._breadcrumb.store('id', "Project");
    this._breadcrumb.store('projectId',"");
    this._breadcrumb.store('bugId',"bug");

   }


   onBreadGenerate(bcDisplay: string){
      console.log("onBreadGenerate-->",bcDisplay);
      this.breadcrumbDisplay = bcDisplay!="false";
   }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
