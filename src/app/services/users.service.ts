import { Injectable } from '@angular/core';
import { Constants } from 'src/utility/constants';
import { HttpClient,HttpParams,HttpResponse,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = Constants.baseUrl;
  constructor(private http: HttpClient) { }
  getMenuList() {
    return this.http.get(this.baseUrl + '/api/users/getMenuList');
  }
  authenticate(model:any) {
    return this.http.post(this.baseUrl + '/api/users/authenticate',model);
  }
}
