import { Employee } from './employee.model';
import { Project } from './project.model';

export class BugDtls {

    bugId?:number;
    emp?:Employee;
    project?:Project;
    bugName?:string;
    bugDesc?:string;
    bugStart?:Date;
    bugEnd?:Date;
    bugPriority?:string;
    bugAssignee?:number;
    bugStatus?:string;
    bugMgrId?:number;

    constructor(emp?: Employee, project?: Project, bugName?: string, bugDesc?: string, bugStart?: Date, bugEnd?: Date, bugPriority?: string, bugAssignee?: number, bugStatus?: string, bugMgrId?: number, bugId?: number) 
    {
        this.bugId=bugId;
        this.emp=emp;
        this.project=project;
        this.bugName=bugName;
        this.bugDesc=bugDesc;
        this.bugStart=bugStart;
        this.bugEnd=bugEnd;
        this.bugPriority=bugPriority;
        this.bugAssignee=bugAssignee;
        this.bugStatus=bugStatus;
        this.bugMgrId=bugMgrId;
    }
    
}
// private Integer bugId;
// private Employee emp;
// private Project project;
// private String bugName;
// private String bugDesc;
// private LocalDate bugStart;
// private LocalDate bugEnd;
// private String bugPriority;
// private String bugAssignee;
// private String bugStatus;
// private String bugMgrId;