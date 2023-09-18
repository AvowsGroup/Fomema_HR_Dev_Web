import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy,JsonPipe,LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { RegistrationListComponent } from './employee/registration-list/registration-list.component';
import { RegistrationComponent } from './employee/registration/registration.component';
import { TimesheetListComponent } from './timesheet/timesheet-list/timesheet-list.component';
import { TimesheetCreateComponent } from './timesheet/timesheet-create/timesheet-create.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { NavComponent } from './nav/nav.component';
import { TimesheetDraftComponent } from './timesheet/timesheet-draft/timesheet-draft.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
@NgModule({
  declarations: [
    AppComponent,    
    RegistrationListComponent,
    RegistrationComponent,    
    TimesheetListComponent,
    TimesheetCreateComponent,
    LoginComponent,
    DashboardLayoutComponent, 
   NavComponent,
   HeaderLayoutComponent,
   TimesheetDraftComponent,
   DashboardMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
