import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { CustomerIssuesComponent } from './customer-issues/customer-issues.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';
import { NewInstallationComponent } from './new-installation/new-installation.component';
import { FooterComponent } from './footer/footer.component';
import { CompletedIssueComponent } from './completed-issue/completed-issue.component';
import { AddNewInstallationComponent } from './add-new-installation/add-new-installation.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';



const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Sidebar',component:SidebarComponent},
  {path:'CompanySetup',component:CompanySetupComponent},
  {path:'StaffSetup',component:StaffSetupComponent},
  {path:'CustomerReport',component:CustomerReportComponent},
  {path:'NewInstallation',component:NewInstallationComponent},
  {path:'CustomerIssues',component:CustomerIssuesComponent},
  {path:'Footer',component:FooterComponent},
  {path:'CompletedIssue',component:CompletedIssueComponent},
  {path:'AddNewInstallation',component:AddNewInstallationComponent},
  {path:'StaffDetails',component:StaffDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
