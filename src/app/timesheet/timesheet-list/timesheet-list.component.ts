import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/services/timesheet.service';
@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {
// divtimesheettab(arg0: string) {
// throw new Error('Method not implemented.');
// }
timesheethistoryactive:any;
timesheethistoryshow:any;
timesheetactive:any='active';
timsheetshow:any='show';
uploadtimesheetactive:any;
uploadtimesheetshow:any;
draftlistactive:any;
draftlistshow:any;
tabid:any;

  constructor(private timesheetService:TimesheetService) { }

  ngOnInit(): void {
    this.getListtimesheet();
  }
  gridtimesheetlist:any;
  getListtimesheet() { 
    this.timesheetService.gettimesheetList().subscribe(
     (result: any) => {
    this.gridtimesheetlist = result; 
    },
     (error) => {
     console.error(error);
    }
     ); 
  }

  divtimesheettab(tabid: any) {
    if(tabid =='div_timesheet')
    {
      this.timesheetactive='active';
      this.timsheetshow='show';
      this.draftlistactive='';
      this.draftlistshow ='';
      this.timesheethistoryactive='';
      this.timesheethistoryshow='';
      this.uploadtimesheetactive='';
      this.uploadtimesheetshow='';
    }
if(tabid == 'div_fromdraft'){
  this.timesheetactive='';
  this.timsheetshow='';
  this.draftlistactive='active';
  this.draftlistshow ='show';
  this.timesheethistoryactive='';
  this.timesheethistoryshow='';
  this.uploadtimesheetactive='';
  this.uploadtimesheetshow='';
}
else if(tabid =='div_apptimesheethistroy')
{
  this.timesheetactive='';
  this.timsheetshow='';
  this.draftlistactive='';
  this.draftlistshow ='';
  this.timesheethistoryactive='active';
  this.timesheethistoryshow='show';
  this.uploadtimesheetactive='';
  this.uploadtimesheetshow='';

}
else if(tabid == 'div_uploadtimesheethistroy')
{
  this.timesheetactive='';
  this.timsheetshow='';
  this.draftlistactive='';
  this.draftlistshow ='';
  this.timesheethistoryactive='';
  this.timesheethistoryshow='';
  this.uploadtimesheetactive='active';
  this.uploadtimesheetshow='show';
}
  }
  status1Items: any[] = [];
  status2Items: any[] = [];
  status3Items: any[]=[];
  items:any;
  filterItemsByStatus() {
    this.status1Items = this.items.filter((item: { status: number; }) => item.status === 1);
    this.status2Items = this.items.filter((item: { status: number; }) => item.status === 2);
    this.status3Items = this.items.filter((item: { status: number; }) => item.status === 3);
  }
}
