import { Login } from './login.model';
import { BugDtls } from './bug-dtls.model';
import { Project } from './project.model';

export class Employee {

    empId?:number;
    empMgr?:Employee;
    firstName?:string;
    lastName?:string;
    createdOn?:Date;
    userName?:string;
    login?:Login;
    employeeSubOrdinates?:Employee[];
    bugDtls?:BugDtls[];
    projects?:Project[];

    public constructor(empMgr?: Employee, firstName?: string, lastName?: string, createdOn?: Date, userName?: string, login?: Login, employeeSubOrdinates?:Employee[],bugDtls?:BugDtls[],projects?:Project[],empId?:number){
        this.empMgr=empMgr;
        this.firstName=firstName;
        this.lastName=lastName;
        this.createdOn=createdOn;
        this.userName=userName;
        this.login=login;
        this.employeeSubOrdinates = employeeSubOrdinates;
        this.bugDtls=bugDtls;
        this.projects=projects;
        this.empId=empId;
    }

}

// private Integer empId;
// private Employee emp;
// private String firstName;
// private String lastName;
// private LocalDate createdOn;
// private String userName;
// private Set<Employee> employees = new HashSet<>();
// private Set<BugDtls> bugDtls = new HashSet<>();
// private Login login;
// private Set<Project> projects = new HashSet<>();
