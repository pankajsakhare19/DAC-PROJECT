import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName:string;
  role:string;
  
  constructor(private auth:AuthService) { }

  ngOnInit() {

    if(localStorage.getItem("user") != null){
      this.userName = JSON.parse(localStorage.getItem("user")).firstName;
      if(JSON.parse(localStorage.getItem("user")).lastName!=null){
      this.userName +=" "+ JSON.parse(localStorage.getItem("user")).lastName;
    }}
  }

  getUserRole(){
    this.role= JSON.parse(localStorage.getItem("user")).login.role;
    if(this.role=='DEVTEST'){
      return "Product Engineer";
    }
    else if(this.role=='ADMIN'){
      return "System Administrator";
    }
    else if(this.role === 'SUPPORT'){
      return "Support Engineer";
    }
    else if(this.role === 'MANAGER' ){
      return "Manager";
    }
  }

  isAdmin():boolean{
    return this.auth.isAdmin();
  }

}
