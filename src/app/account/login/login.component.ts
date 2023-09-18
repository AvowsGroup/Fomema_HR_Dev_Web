import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/utility/constants';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileImage: string = Constants.profileImage;
  appLogo: string = Constants.appLogo;
  constructor(private userService:UsersService,private router:Router) { }
  loginFrom:any;
  ngOnInit(): void {
    this.loginFrom = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  errorMsg:string="";
  onLoginSubmit() {    
    
   debugger;
    this.userService.authenticate(this.loginFrom.value).subscribe(
      (result: any) => {
        this.router.navigate(['/fomema/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
