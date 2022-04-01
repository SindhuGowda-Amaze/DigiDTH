import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }

  login: any;
  UserName: any;
  company_name: any;
  role: any;
  temp: any;
  show: any;
  active:any
  ngOnInit(): void {
  }

  public customerissues() {
    this.active = 'customerissue';
    this.router.navigate(['/CustomerIssues']);
    localStorage.setItem('Pagename', 'Customer Issues')
  }


  public newinstallation() {
    this.active = 'customerissue';
    this.router.navigate(['/NewInstallation']);
    localStorage.setItem('Pagename', 'New Installation')
  }
  public customerreport() {
    this.active = 'customerreport';
    this.router.navigate(['/CustomerReport']);
    localStorage.setItem('Pagename', 'Customer Report')
  }
  public StaffSetup() {
    this.active = 'StaffSetup';
    this.router.navigate(['/StaffSetup']);
    localStorage.setItem('Pagename', 'Staff Setup')
  }
  public CompanySetup() {
    this.active = 'CompanySetup';
    this.router.navigate(['/CompanySetup']);
    localStorage.setItem('Pagename', 'Company Setup')
  }

  public openCity(evt: any) {
    var i, tablinks;

    tablinks = document.getElementsByClassName("nonactive");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    evt.currentTarget.className += " active";
  }




}
