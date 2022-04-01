import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { NewInstallationComponent } from './new-installation/new-installation.component';
import { CustomerIssuesComponent } from './customer-issues/customer-issues.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    CompanySetupComponent,
    StaffSetupComponent,
    CustomerReportComponent,
    NewInstallationComponent,
    CustomerIssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDropzoneModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
