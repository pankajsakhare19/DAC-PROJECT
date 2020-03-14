import { Employee } from './employee.model';

export class Login {

    email?:string;
    emp?:Employee;
    password?:string;
    role?:string;
    lastLogin?:Date;
    resetToken?:string;

    public constructor(email?:string,emp?:Employee,password?:string,role?:string,lastLogin?:Date,resetToken?:string) {
        this.email=email;
        this.emp=emp;
        this.password=password;
        this.role=role;
        this.lastLogin=lastLogin;
        this.resetToken=resetToken;
    }

}


// private String email;
// private Employee emp;
// private String password;
// private String role;
// private Date lastLogin;
// private String resetToken;