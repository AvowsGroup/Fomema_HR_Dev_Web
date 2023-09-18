import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { Route } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-timesheet-draft',
  templateUrl: './timesheet-draft.component.html',
  styleUrls: ['./timesheet-draft.component.css']
})
export class TimesheetDraftComponent implements OnInit {

  formtimesheet!:any;
  id:any;
  TimeSheetGridListByID: any;
  router: any;
  constructor(
    private timesheetServices:TimesheetService,private ActivatedRoute: ActivatedRoute,
  ) { this.ActivatedRoute.queryParamMap.subscribe((params)=>
    {
      this.id=params.get('id');
     
    }) }
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
      remarks:new FormControl(null), 
      status:new FormControl(null), 
    })
    if (this.id != null) {
      this.getTimeSheetGridListById();
    }
  }
enablebutton:any=true;
getTimeSheetGridListById()
{
  this.timesheetServices.gettimesheetListByID(this.id).subscribe(
    (result:any) => {
      this.TimeSheetGridListByID =result;
      this.formtimesheet = new FormGroup({
        id: new FormControl<number>(this.id),
        shift_time_in: new FormControl({value: this.TimeSheetGridListByID.shift_time_in}),
        shift_time_out: new FormControl({value: this.TimeSheetGridListByID.shift_time_out}),
        actual_time_in: new FormControl({value:this.TimeSheetGridListByID.actual_time_in}),
        actual_time_out: new FormControl({value: this.TimeSheetGridListByID.actual_time_out}),
        actual_ot_hr:new FormControl({value:this.TimeSheetGridListByID.actual_ot_hr}),
        lateness:new FormControl({value:this.TimeSheetGridListByID.lateness}),
        earlyout:new FormControl({value:this.TimeSheetGridListByID.earlyout}),
        requested_time_in: new FormControl({value:this.TimeSheetGridListByID.requested_time_in}),
        requested_time_out:new FormControl({value:this.TimeSheetGridListByID.requested_time_out}),
        requested_ot_hr:new FormControl({value:this.TimeSheetGridListByID.requested_ot_hr}),
        remarks:new FormControl({value:this.TimeSheetGridListByID.remarks}),
        status:new FormControl({value:this.TimeSheetGridListByID.status}),

      })
    },
    (error: any) => {
      console.error(error);
    }
  );
}
formattach:any;
onAddSubmit() { 
    console.log(this.formtimesheet.value);
    this.timesheetServices
      .addUpdatetimesheet(this.formtimesheet.getRawValue(),this.formattach)
      .subscribe(
        (data: any) => { 
          console.log(data);
          Swal.fire('Record Saved Successfully', '', 'success');
          this.goBack();
          console.log('created');
        },
        (error) => {
          console.log(error);
        }
      );
  }

 
goBack() {
  this.router.navigate(['fomema/timesheet-list']);
}

  }


