import { Injectable } from '@angular/core';
import { Constants } from 'src/utility/constants';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string = Constants.baseUrl;
  constructor(private http: HttpClient) { }
  getEmployeeList() {
    return this.http.get(this.baseUrl + '/api/employee/getEmployeeregistration');
  }
  getEmployeeListByID(Id:any) {
    const params= new HttpParams().set('Id', Id);
    return this.http.get(this.baseUrl + '/api/employee/getEmployeeregistrationListbyID',{params});
  }
  addUpdateEmployee(obj: any,empphoto:any) {
    const formData = new FormData();
    formData.append('strData', JSON.stringify(obj));
    formData.append('pic', empphoto);   
    return this.http.post(this.baseUrl + '/api/employee/saveEmployeeregistrationDetails', formData);
  }
  //dropdown
  get_ddlGender(){
    return this.http.get(this.baseUrl + '/api/employee/getGender');
  }
  get_ddlholiday(){
    return this.http.get(this.baseUrl + '/api/employee/getHolidayGroup');
  }
  get_ddljobGrade(){
    return this.http.get(this.baseUrl + '/api/employee/getJobGrade');
  }
  get_ddlMaritalStatus(){
    return this.http.get(this.baseUrl + '/api/employee/getMaritalStatus');
  }
  get_ddlOtType(){
    return this.http.get(this.baseUrl + '/api/employee/getOTType');
  }
  get_ddlProbation(){
    return this.http.get(this.baseUrl + '/api/employee/getProbition');
  }
  get_ddlRestday(){
    return this.http.get(this.baseUrl + '/api/employee/getRestDay');
  }
  get_ddlSection(){
    return this.http.get(this.baseUrl + '/api/employee/getSection');
  }
  get_ddlStatus(){
    return this.http.get(this.baseUrl + '/api/employee/getStatus');
  }
  get_ddlWorkingHours(){
    return this.http.get(this.baseUrl + '/api/employee/getWorkingHoursShift');
  }
  get_ddlDepartment(){
    return this.http.get(this.baseUrl + '/api/employee/getDepartment');
  }
  get_ddlDesignation(){
    return this.http.get(this.baseUrl + '/api/employee/getDesignation');
  }
  get_ddlemployee(){
    return this.http.get(this.baseUrl + '/api/employee/getemployee');
  }
  
}
