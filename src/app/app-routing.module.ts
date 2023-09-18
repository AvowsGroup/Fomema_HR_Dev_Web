import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationListComponent } from './employee/registration-list/registration-list.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './employee/registration/registration.component';
import { TimesheetCreateComponent } from './timesheet/timesheet-create/timesheet-create.component';
import { TimesheetListComponent } from './timesheet/timesheet-list/timesheet-list.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'fomema',
    component: DashboardLayoutComponent,
    children: [
        //employee
        { path: 'dashboard', component: DashboardMainComponent },
        { path: 'employee-list', component: RegistrationListComponent },
        { path: 'employee', component: RegistrationComponent },
        { path: 'timesheet-list', component: TimesheetListComponent },
        { path: 'timesheet', component: TimesheetCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
