import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { Employee } from "src/app/models/employee.model";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  employees: Employee[];

  constructor(private empService: EmployeeService) {}
  displayedColumns: string[] = ["empId", "firstName", "lastName", "userName"];
  dataSource;

  ngOnInit() {

    this.empService.getEmployeeList().subscribe(data=>{
      this.employees=data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log("employees-->",this.employees);
      console.log(this.dataSource);
    });

    console.log(this.employees);
    console.log(this.dataSource);
  }
}
