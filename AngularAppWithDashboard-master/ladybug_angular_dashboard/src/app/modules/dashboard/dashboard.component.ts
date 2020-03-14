import { Component, OnInit } from "@angular/core";
import * as CanvasJS from "../../../assets/canvasjs.min";
import { AuthService } from "src/app/services/auth.service";
import { EmployeeService } from "src/app/services/employee.service";
import { Employee } from "src/app/models/employee.model";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { BugService } from "src/app/services/bug.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  userRole: string = null;
  public bugStatusCount: Number[];
  public bugPriorityCount: Number[];
  constructor(private svc: AuthService, private bugSvc: BugService) {}

  ngOnInit() {
    let chart1;
    this.bugSvc.getBugStatusCount().subscribe(data => {
      this.bugStatusCount = data;
      console.log(this.bugStatusCount[0]);
      console.log(this.userRole);
      if (this.userRole == null) {
        this.userRole = JSON.parse(localStorage.getItem("user")).login.role;
      }
      chart1 = new CanvasJS.Chart("chartContainer1", {
        theme: "light4",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Overall Bugs Status"
        },
        backgroundColor: "#ffffff00",
        data: [
          {
            type: "column",
            dataPoints: [
              { y: this.bugStatusCount[0], label: "NEW" },
              { y: this.bugStatusCount[1], label: "IN-PROGRESS" },
              { y: this.bugStatusCount[2], label: "FIXED" },
              { y: this.bugStatusCount[3], label: "CLOSED" }
            ]
          }
        ]
      });
      chart1.render();

      let chart2 = new CanvasJS.Chart("chartContainer2", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Overall Bugs Status"
        },
        backgroundColor: "#ffffff00",

        data: [
          {
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: {y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
              { y: this.bugStatusCount[0], name: "NEW" },
              { y: this.bugStatusCount[1], name: "IN-PROGRESS" },
              { y: this.bugStatusCount[2], name: "FIXED" },
              { y: this.bugStatusCount[3], name: "CLOSED" }
            ]
          }
        ]
      });
      chart2.render();
    });

    let chart3;
    this.bugSvc.getBugPriorityCount().subscribe(data => {
      this.bugPriorityCount = data;
      if (this.userRole == null) {
        this.userRole = JSON.parse(localStorage.getItem("user")).login.role;
      }
      chart3 = new CanvasJS.Chart("chartContainer3", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Overall Bugs Priority"
        },
        backgroundColor: "#ffffff00",

        data: [
          {
            type: "column",
            dataPoints: [
              { y: this.bugPriorityCount[0], label: "LOWEST" },
              { y: this.bugPriorityCount[1], label: "LOW" },
              { y: this.bugPriorityCount[2], label: "MEDIUM" },
              { y: this.bugPriorityCount[3], label: "HIGH" },
              { y: this.bugPriorityCount[4], label: "HIGHEST" }
            ]
          }
        ]
      });
      chart3.render();

      let chart4 = new CanvasJS.Chart("chartContainer4", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Overall Bugs Priority"
        },
        backgroundColor: "#ffffff00",

        data: [
          {
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: {y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
              { y: this.bugPriorityCount[0], name: "LOWEST" },
              { y: this.bugPriorityCount[1], name: "LOW" },
              { y: this.bugPriorityCount[2], name: "MEDIUM" },
              { y: this.bugPriorityCount[3], name: "HIGH" },
              { y: this.bugPriorityCount[4], name: "HIGHEST" }
            ]
          }
        ]
      });
      chart4.render();
    });
  }
}
