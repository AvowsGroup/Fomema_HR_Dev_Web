import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getListemployee();
  }
  gridemployeelist:any;
  getListemployee() { 
    this.employeeService.getEmployeeList().subscribe(
     (result: any) => {
    this.gridemployeelist = result; 
    },
     (error) => {
     console.error(error);
    }
     ); 
  }
    

}
