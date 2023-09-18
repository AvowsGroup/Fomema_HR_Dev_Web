import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { Constants } from 'src/utility/constants';
import { Router,ActivatedRoute } from '@angular/router';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { FormControl,FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-timesheet-create',
  templateUrl: './timesheet-create.component.html',
  styleUrls: ['./timesheet-create.component.css']
})
export class TimesheetCreateComponent implements OnInit {
  baseUrl: string = Constants.baseUrl;
  Id:any;
  view:any;
  profile:any;


  constructor(private router:Router,private ActivatedRoute: ActivatedRoute,private timesheetService:TimesheetService) { this.ActivatedRoute.queryParamMap.subscribe((params)=>
    {
          this.Id=params.get('id');
          this.view=params.get('view');
          this.profile=params.get('profile');
    }) 
  }
  formtimesheet!:any;
  ngOnInit(): void {
    this.formtimesheet = new FormGroup({
      id: new FormControl<number>(0),  
      shift_time_in:new FormControl(null),
      shift_time_out:new FormControl(null),
      actual_time_in:new FormControl(null),
      actual_time_out:new FormControl(null), 
      actual_ot_hr:new FormControl(null), 
      lateness:new FormControl(null), 
      earlyout:new FormControl(null), 
      requested_time_in :new FormControl(null),
      requested_time_out:new FormControl(null), 
      requested_ot_hr:new FormControl(null), 
      requested_lateness:new FormControl(null), 
      requested_earlyout:new FormControl(null), 
      remarks:new FormControl(null), 
      status:new FormControl(null), 
      statusname:new FormControl(null)
    })
    if (this.Id != null) {
      this.getTimeSheetListById();
      this.FileuploadList(this.Id);
    }
  }
TimeSheetListByID:any;
clockdate:any;
getTimeSheetListById()
{
  this.timesheetService.gettimesheetListByID(this.Id).subscribe(
    (result:any) => {
      this.TimeSheetListByID =result;
      this.formtimesheet = new FormGroup({
        id: new FormControl<number>(this.Id),
        shift_time_in: new FormControl({value: this.TimeSheetListByID.shift_time_in.split('T')[1],disabled:true}),
        shift_time_out: new FormControl({value:this.TimeSheetListByID.shift_time_out,disabled:true}),
        actual_time_in: new FormControl({value:this.TimeSheetListByID.actual_time_in,disabled:true}),
        actual_time_out: new FormControl({value:this.TimeSheetListByID.actual_time_out,disabled:true}),
        actual_ot_hr:new FormControl({value:this.TimeSheetListByID.actual_ot_hr,disabled:true}),
        lateness:new FormControl({value:this.TimeSheetListByID.lateness,disabled:true}),
        earlyout:new FormControl({value:this.TimeSheetListByID.earlyout,disabled:true}),
        requested_time_in: new FormControl(this.TimeSheetListByID.requested_time_in),
        requested_time_out:new FormControl(this.TimeSheetListByID.requested_time_out),
        requested_ot_hr:new FormControl(this.TimeSheetListByID.requested_ot_hr),
        requested_lateness:new FormControl(this.TimeSheetListByID.requested_lateness), 
        requested_earlyout:new FormControl(this.TimeSheetListByID.requested_earlyout), 
        remarks:new FormControl(this.TimeSheetListByID.remarks),
        status:new FormControl({value:this.TimeSheetListByID.status,disabled:true}),
        statusname:new FormControl({value:this.TimeSheetListByID.statusname,disabled:true}),
      })
      this.clockdate=this.convertToDate(this.TimeSheetListByID.clock_date.split('T')[0]);
      this.shift_timein=this.TimeSheetListByID.shift_time_in;
      this.shift_timeout=this.TimeSheetListByID.shift_time_out;
      this.actual_timein=this.TimeSheetListByID.actual_time_in;
      this.actual_timeout=this.TimeSheetListByID.actual_time_out;
      this.actual_othr=this.TimeSheetListByID.actual_ot_hr;
      this.lateness=this.TimeSheetListByID.lateness;
      this.earlyout=this.TimeSheetListByID.earlyout;
      this.requestedtimein=this.TimeSheetListByID.requested_time_in;
      this.requestedtimeout=this.TimeSheetListByID.requested_time_out;
      this.requested_othr=this.TimeSheetListByID.requested_ot_hr;
      this.requested_lateness=this.TimeSheetListByID.requested_lateness;
      this.requested_early_out=this.TimeSheetListByID.requested_earlyout;
    },
    (error: any) => {
      console.error(error);
    }
  );
}
logoName: any;
  selectedFile: any;
  UploadDisplayImage(event: any) {
    debugger;
    let fileToUpload = event.target.files[0];
    let extension = fileToUpload.name.split('.').pop();
    debugger;

    if (event.target.files && event.target.files.length) {
      for (const file of event.target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (loadRes: any) => {
          debugger;
          //this.logoName = event.target.files[0].name;
          this.selectedFile = event.target.files[0];
        };
      }
      
    }
  }
statusname:any;
requested_early_out:any;
requested_lateness:any;
requested_othr:any;
requestedtimeout:any;
requestedtimein:any;
lateness:any;
earlyout:any;
actual_timein:any;
actual_timeout:any;
actual_othr:any;
shift_timein:any;
shift_timeout:any;
convertToDate(dateString:any) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("-");
  let dat = d[2] + '-' + d[1] + '-' + d[0];
  return dat;     
}
goback(){
  this.router.navigate(['/fomema/timesheet-list']);
}
toDate(dateStr:any) {
  var parts = dateStr.split("-")
  return new Date(parts[2], parts[1] - 1, parts[0])
}
savedata(el:any){
  debugger;
 this.statusname=el;
 this.timesheetService
 .addfileupload(this.formtimesheet.getRawValue(),this.selectedFile)
 .subscribe(
   (data: any) => { 
     console.log(data);
     Swal.fire('Record Saved Successfully', '', 'success');       
     console.log('created');
   //  this.goback();
   },
   (error) => {
     console.log(error);
   }
 );
}

deletefileupload(Id:any) { 
  debugger;
  this.timesheetService.deletefileupload(Id).subscribe(
   (result: any) => {
 this.FileuploadList(this.Id);
 Swal.fire("Deleted Successfully", '', 'success');
  },
   (error) => {
   console.error(error);
  }
   ); 
}
fileUrl:any;
download = (filepath: any, fileurl: any) => {
  console.log(this.fileUrl);
  console.log(fileurl);
  debugger;
  this.fileUrl = 'Uploads/timesheet/' + fileurl;
  this.timesheetService.download(this.fileUrl).subscribe((event) => {
  

    this.timesheetService.downloadFile(event, filepath);
    
  });
};
gridfileupload:any;
FileuploadList(Id:any) { 
  this.timesheetService.FileuploadList(Id).subscribe(
   (result: any) => {
    this.gridfileupload=result;
  },
   (error) => {
   console.error(error);
  }
   ); 
}
btndraft:any;
  addorupdatetimesheet(button: HTMLButtonElement){
    debugger;  
    this.btndraft=button.innerHTML;
    if(this.btndraft=="Save Draft"){
    this.formtimesheet
    .get('statusname')
    ?.setValue("Draft");
    }
    else{
      this.btndraft="Apply";
      this.formtimesheet
    .get('statusname')
    ?.setValue("Apply");
    }
    this.timesheetService
    .addUpdatetimesheet(this.formtimesheet.getRawValue(),this.selectedFile)
    .subscribe(
      (data: any) => { 
        console.log(data);
        Swal.fire('Record Saved Successfully', '', 'success');       
        console.log('created');
        this.goback();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
