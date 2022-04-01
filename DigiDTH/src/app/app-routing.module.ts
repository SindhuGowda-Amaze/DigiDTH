import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HeaderComponent} from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { NewInstallationComponent } from './new-installation/new-installation.component';
import { CustomerIssuesComponent } from './customer-issues/customer-issues.component';


const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Sidebar',component:SidebarComponent},
  {path:'CompanySetup',component:CompanySetupComponent},
  {path:'StaffSetup',component:StaffSetupComponent},
  {path:'CustomerReport',component:CustomerReportComponent},
  {path:'NewInstallation',component:NewInstallationComponent},
  {path:'CustomerIssues',component:CustomerIssuesComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
