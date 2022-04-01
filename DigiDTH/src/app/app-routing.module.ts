import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { CustomerIssuesComponent } from './customer-issues/customer-issues.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: 'Login', component: LoginComponent },

  { path: 'CompanySetup', component:  CompanySetupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
