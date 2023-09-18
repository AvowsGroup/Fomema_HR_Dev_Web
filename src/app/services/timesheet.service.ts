import { Injectable } from '@angular/core';
import { Constants } from 'src/utility/constants';
import { HttpClient,HttpParams,HttpResponse,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  baseUrl: string = Constants.baseUrl;
  constructor(private http: HttpClient) { }
  gettimesheetList() {
    return this.http.get(this.baseUrl + '/api/timesheet/gettimesheetRegistration');
  }
  gettimesheetListByID(Id:any) {
    const params= new HttpParams().set('Id', Id);
    return this.http.get(this.baseUrl + '/api/timesheet/gettimesheetRegistrationListByID',{params});
  }
  FileuploadList(Id:any) {
    const params= new HttpParams().set('Id', Id);
    return this.http.get(this.baseUrl + '/api/timesheet/FileuploadList',{params});
  }
  public download(fileUrl: string) { 
    console.log(fileUrl);
    
    return this.http.get(`${this.baseUrl}/api/common/download?fileUrl=${fileUrl}`, {
      reportProgress: true,
      observe: 'response',
      responseType: 'blob'
    }); 
  }
  public downloadFile = (data: any | HttpResponse<Blob>,fileUrl:any) => {
    const downloadedFile = new Blob([data.body], { type: data.body.type });
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    a.download = fileUrl;
    a.href = URL.createObjectURL(downloadedFile);
    a.target = '_blank';
    a.click();
    document.body.removeChild(a);
  }

  deletefileupload(Id:any) {
    const params= new HttpParams().set('Id', Id);
    return this.http.get(this.baseUrl + '/api/timesheet/deletefileupload',{params});
  }
  addUpdatetimesheet(obj: any,empphoto:any) {
    const formData = new FormData();
    formData.append('strData', JSON.stringify(obj));
    formData.append('pic', empphoto);   
    return this.http.post(this.baseUrl + '/api/timesheet/savetimesheetRegistration', formData);
  }
  addfileupload(obj: any,empphoto:any) {
    const formData = new FormData();
    formData.append('strData', JSON.stringify(obj));
    formData.append('pic', empphoto);   
    return this.http.post(this.baseUrl + '/api/timesheet/savefileupload', formData);
  }
}
