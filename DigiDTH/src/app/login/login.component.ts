import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  roleid: any;
  username: any;
  password: any;
  getroleid(even: any) {
    this.roleid = even.target.value;
  }


  login() {
    debugger
    if (this.roleid == 1) {
      debugger
      if (this.username == "Admin" && this.password == "amaze1234") {
        localStorage.setItem("temp", "1")
        localStorage.setItem("roleid", this.roleid)
        localStorage.setItem("loginname", this.username)
        location.reload();
      }
      else {
        alert("Please enter valid Credentials")
      }
    }
    else if (this.roleid == 2) {
      debugger
      if (this.username == "Staff" && this.password == "Staff@123") {
        localStorage.setItem("temp", "1")
        localStorage.setItem("roleid", this.roleid)
        localStorage.setItem("loginname", this.username)

        location.reload();
      }
    }
  }

  companycode:any;
  public getcompanycode() {
    debugger
    localStorage.setItem('companycode', this.companycode);
    if (this.companycode == 1001) {
      localStorage.setItem('apiurl', 'http://103.133.214.197/digiOfficeV4API');

    }
    else if (this.companycode == 1002) {
      localStorage.setItem('apiurl', 'http://103.133.214.197/Dynamic_NCNDAAPI');
    }
  }

  showpassword:any;
Showhidepassword() {
  debugger
  if (this.showpassword == 0) {
    this.showpassword = 1;
  }
  else {
    this.showpassword = 0;
  }
}
}
