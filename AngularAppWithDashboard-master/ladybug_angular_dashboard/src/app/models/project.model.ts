import { BugDtls } from './bug-dtls.model';
import { Employee } from './employee.model';

export class Project {

    projectId?:number;
    projectName?:string;
    projectDesc?:string;
    projectMgr?:number;
    bugDtls?:BugDtls[];
    employees?:Employee[];

    constructor(projectId?:number,projectName?:string,projectDesc?:string,projectMgr?:number,bugDtls?:BugDtls[],employees?:Employee[]) {
        this.projectId=projectId;
        this.projectName=projectName;
        this.projectDesc=projectDesc;
        this.projectMgr=projectMgr;
        this.bugDtls=bugDtls;
        this.employees=employees;
    }
}

// private int projectId;
// private String projectName;
// private String projectDesc;
// private Integer projectMgr;
// private Set<BugDtls> bugDtls = new HashSet<>();
// private Set<Employee> employees = new HashSet<>();