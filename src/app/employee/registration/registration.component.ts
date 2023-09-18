import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Constants } from 'src/utility/constants';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  baseUrl: string = Constants.baseUrl;
    view:any;
  profile:any;

  constructor(private router:Router,private ActivatedRoute: ActivatedRoute,private employeeService:EmployeeService) { this.ActivatedRoute.queryParamMap.subscribe((params)=>
    {
      this.Id=params.get('id');
      this.view=params.get('view');
this.profile=params.get('profile');
    }) }
  empactive:any='active';
  businessactive:any;
  workingactive:any;
  approvalactive:any;  
  empshow:any='show';
  businessshow:any;
  workingshow:any;
  approvalshow:any;
  Id:any;
formemployee!: FormGroup;
  ngOnInit(): void {
    this.formemployee = new FormGroup({
      id: new FormControl(0),
      employeeCode: new FormControl(null),
      fullName:new FormControl(null),
      shortName:new FormControl(null),
      gender:new FormControl(null),
      maritalStatus:new FormControl(null),
      biometricId:new FormControl(null),
      joinDate:new FormControl(null),
      resignDate:new FormControl(null),
      confirmationDate:new FormControl(null),
      probation:new FormControl(null),
      emailAddress:new FormControl(null),
      mobileNo:new FormControl(null),
      reasonResignation:new FormControl(null),
      department:new FormControl(null),
      designation:new FormControl(null),
      section:new FormControl(null),
      holidayGroup:new FormControl(null),
      hoursWorkedDay:new FormControl(null),
      dayWorkedWeek:new FormControl(null),
      hoursWorkedyear:new FormControl(null),
      jobGrade:new FormControl(null),
      firstLevelApproval:new FormControl(null),
      secondLevelApproval:new FormControl(null),
      thirdLevelApproval:new FormControl(null),
      status:new FormControl(null),
      otType:new FormControl(null),
      hourly:new FormControl(null),
      workingHourseperShift:new FormControl(null),
      restDay:new FormControl(null),
    });
    this.get_ddlGender();
    this.get_ddlholiday();
    this.get_ddljobGrade();
    this.get_ddlMaritalStatus();
    this.get_ddlOtType();
    this.get_ddlProbation();
    this.get_ddlRestday();
    this.get_ddlSection();
    this.get_ddlStatus();
    this.get_ddlWorkingHours();
    this.get_ddlDepartment();
    this.get_ddlDesignation();
    this.get_ddlemployee();
    if(this.Id != null){this.getEmployeeGridListByID()};
  }
  EmployeeListByID:any;
  enablebutton:any=true;
  getEmployeeGridListByID(){
    this.employeeService.getEmployeeListByID(this.Id).subscribe(
      (result: any) => {
        this.EmployeeListByID = result;
        if(this.view=='view'){
          this.enablebutton=false;
          this.formemployee = new FormGroup
          ({
           id: new FormControl<number>(this.Id),
           employeeCode: new FormControl({value:this.EmployeeListByID.employeeCode,disabled:true}),          
      fullName:new FormControl({value:this.EmployeeListByID.fullName,disabled:true}),
      shortName:new FormControl({value:this.EmployeeListByID.shortName,disabled:true}),
      gender:new FormControl({value:this.EmployeeListByID.gender,disabled:true}),
      maritalStatus:new FormControl({value:this.EmployeeListByID.maritalStatus,disabled:true}),
      biometricId:new FormControl({value:this.EmployeeListByID.biometricId,disabled:true}),
      joinDate:new FormControl({value:this.EmployeeListByID.joinDate.split('T')[0],disabled:true}),
      resignDate:new FormControl({value:this.EmployeeListByID.resignDate.split('T')[0],disabled:true}),
      confirmationDate:new FormControl({value:this.EmployeeListByID.confirmationDate.split('T')[0],disabled:true}),
      probation:new FormControl({value:this.EmployeeListByID.probation,disabled:true}),
      emailAddress:new FormControl({value:this.EmployeeListByID.emailAddress,disabled:true}),
      mobileNo:new FormControl({value:this.EmployeeListByID.mobileNo,disabled:true}),
      reasonResignation:new FormControl({value:this.EmployeeListByID.reasonResignation,disabled:true}),
      department:new FormControl({value:this.EmployeeListByID.department,disabled:true}),
      designation:new FormControl({value:this.EmployeeListByID.designation,disabled:true}),
      section:new FormControl({value:this.EmployeeListByID.section,disabled:true}),
      holidayGroup:new FormControl({value:this.EmployeeListByID.holidayGroup,disabled:true}),
      hoursWorkedDay:new FormControl({value:this.EmployeeListByID.hoursWorkedDay,disabled:true}),
      dayWorkedWeek:new FormControl({value:this.EmployeeListByID.dayWorkedWeek,disabled:true}),
      hoursWorkedyear:new FormControl({value:this.EmployeeListByID.hoursWorkedyear,disabled:true}),
      jobGrade:new FormControl({value:this.EmployeeListByID.jobGrade,disabled:true}),
      firstLevelApproval:new FormControl({value:this.EmployeeListByID.firstLevelApproval,disabled:true}),
      secondLevelApproval:new FormControl({value:this.EmployeeListByID.secondLevelApproval,disabled:true}),
      thirdLevelApproval:new FormControl({value:this.EmployeeListByID.thirdLevelApproval,disabled:true}),
      status:new FormControl({value:this.EmployeeListByID.status,disabled:true}),
      otType:new FormControl({value:this.EmployeeListByID.otType,disabled:true}),
      hourly:new FormControl({value:this.EmployeeListByID.hourly,disabled:true}),
      workingHourseperShift:new FormControl({value:this.EmployeeListByID.workingHourseperShift,disabled:true}),
      restDay:new FormControl({value:this.EmployeeListByID.restDay,disabled:true}),
          })
        }
        else{
          this.enablebutton=true;
          this.formemployee = new FormGroup
          ({
           id: new FormControl<number>(this.Id),
           employeeCode: new FormControl(this.EmployeeListByID.employeeCode),          
      fullName:new FormControl(this.EmployeeListByID.fullName),
      shortName:new FormControl(this.EmployeeListByID.shortName),
      gender:new FormControl(this.EmployeeListByID.gender),
      maritalStatus:new FormControl(this.EmployeeListByID.maritalStatus),
      biometricId:new FormControl(this.EmployeeListByID.biometricId),
      joinDate:new FormControl(this.EmployeeListByID.joinDate.split('T')[0]),
      resignDate:new FormControl(this.EmployeeListByID.resignDate.split('T')[0]),
      confirmationDate:new FormControl(this.EmployeeListByID.confirmationDate.split('T')[0]),
      probation:new FormControl(this.EmployeeListByID.probation),
      emailAddress:new FormControl(this.EmployeeListByID.emailAddress),
      mobileNo:new FormControl(this.EmployeeListByID.mobileNo),
      reasonResignation:new FormControl(this.EmployeeListByID.reasonResignation),
      department:new FormControl(this.EmployeeListByID.department),
      designation:new FormControl(this.EmployeeListByID.designation),
      section:new FormControl(this.EmployeeListByID.section),
      holidayGroup:new FormControl(this.EmployeeListByID.holidayGroup),
      hoursWorkedDay:new FormControl(this.EmployeeListByID.hoursWorkedDay),
      dayWorkedWeek:new FormControl(this.EmployeeListByID.dayWorkedWeek),
      hoursWorkedyear:new FormControl(this.EmployeeListByID.hoursWorkedyear),
      jobGrade:new FormControl(this.EmployeeListByID.jobGrade),
      firstLevelApproval:new FormControl(this.EmployeeListByID.firstLevelApproval),
      secondLevelApproval:new FormControl(this.EmployeeListByID.secondLevelApproval),
      thirdLevelApproval:new FormControl(this.EmployeeListByID.thirdLevelApproval),
      status:new FormControl(this.EmployeeListByID.status),
      otType:new FormControl(this.EmployeeListByID.otType),
      hourly:new FormControl(this.EmployeeListByID.hourly),
      workingHourseperShift:new FormControl(this.EmployeeListByID.workingHourseperShift),
      restDay:new FormControl(this.EmployeeListByID.restDay),
          })
        }
        debugger;
        this.setImage(this.EmployeeListByID.empPic);
      }
    );
      }
      empoffer:any;
      selectedoffer:any;
  Uploadoffer(event: any) {    
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();    
        if (event.target.files && event.target.files.length) {
            for (const file of event.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (loadRes: any) => {
              this.empoffer = event.target.files[0];
              this.selectedoffer = this.empoffer.name;
            };
           
          }
         
        }    
  }
  ddlGender:any;
  get_ddlGender(){
    debugger;
    this.employeeService.get_ddlGender().subscribe(
      (result:any)=>{
        this.ddlGender=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlemployee:any;
  get_ddlemployee(){
    debugger;
    this.employeeService.get_ddlemployee().subscribe(
      (result:any)=>{
        this.ddlemployee=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  srcLogo:any;
  public setImage = (fileUrl: string) => {
    if (!(fileUrl == null || fileUrl == ''))
      this.srcLogo = `${this.baseUrl}/${fileUrl}`;
  };
  onAddSubmit(){
    console.log(this.formemployee.value);
    debugger;
    this.employeeService.addUpdateEmployee(this.formemployee.getRawValue(),this.empoffer).subscribe((data:any) => {console.log(data);
      debugger;
      this.Id=data.message;      
      Swal.fire(
        'Employee Details Saved Successfully',
        '',
        'success'
      )
      this.goback();
      console.log('created');
    },
    (error: any)=>{
      console.log(error);
    });
   }
   goback(){
    this.router.navigate(['/fomema/employee-list']);
   }
  ddlholiday:any;
  get_ddlholiday(){
    debugger;
    this.employeeService.get_ddlholiday().subscribe(
      (result:any)=>{
        this.ddlholiday=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddljobGrade:any;
  get_ddljobGrade(){
    debugger;
    this.employeeService.get_ddljobGrade().subscribe(
      (result:any)=>{
        this.ddljobGrade=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlmaritalStatus:any;
  get_ddlMaritalStatus(){
    debugger;
    this.employeeService.get_ddlMaritalStatus().subscribe(
      (result:any)=>{
        this.ddlmaritalStatus=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlOtType:any;
  get_ddlOtType(){
    debugger;
    this.employeeService.get_ddlOtType().subscribe(
      (result:any)=>{
        this.ddlOtType=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlProbation:any;
  get_ddlProbation(){
    debugger;
    this.employeeService.get_ddlProbation().subscribe(
      (result:any)=>{
        this.ddlProbation=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlRestday:any;
  get_ddlRestday(){
    debugger;
    this.employeeService.get_ddlRestday().subscribe(
      (result:any)=>{
        this.ddlRestday=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlSection:any;
  get_ddlSection(){
    debugger;
    this.employeeService.get_ddlSection().subscribe(
      (result:any)=>{
        this.ddlSection=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlStatus:any;
  get_ddlStatus(){
    debugger;
    this.employeeService.get_ddlStatus().subscribe(
      (result:any)=>{
        this.ddlStatus=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlWorkingHours:any;
  get_ddlWorkingHours(){
    debugger;
    this.employeeService.get_ddlWorkingHours().subscribe(
      (result:any)=>{
        this.ddlWorkingHours=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlDepartment:any;
  get_ddlDepartment(){
    debugger;
    this.employeeService.get_ddlDepartment().subscribe(
      (result:any)=>{
        this.ddlDepartment=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  ddlDesignation:any;
  get_ddlDesignation(){
    debugger;
    this.employeeService.get_ddlDesignation().subscribe(
      (result:any)=>{
        this.ddlDesignation=result;
      },
      (error:any)=>{
        console.error(error);
      }
      );
  }
  divemployeetab(tabid:any){
    if(tabid=="div_employeedetails"){
      this.empactive='active'
      this.businessactive=''
      this.workingactive=''
      this.approvalactive=''     
      this.empshow='show'
      this.businessshow=''
      this.workingshow=''
      this.approvalshow=''      
  
    }
    if(tabid=="div_personaldetails"){
      this.empactive=''
      this.businessactive='active'
      this.workingactive=''
      this.approvalactive=''     
      this.empshow=''
      this.businessshow='show'
      this.workingshow=''
      this.approvalshow=''      
  
    }
    if(tabid=="div_etms"){
      this.empactive=''
      this.businessactive=''
      this.workingactive='active'
      this.approvalactive=''     
      this.empshow=''
      this.businessshow=''
      this.workingshow='show'
      this.approvalshow=''      
  
    }
    if(tabid=="div_personalleave"){
      this.empactive=''
      this.businessactive=''
      this.workingactive=''
      this.approvalactive='active'     
      this.empshow=''
      this.businessshow=''
      this.workingshow=''
      this.approvalshow='show'      
  
    }
  }

}
