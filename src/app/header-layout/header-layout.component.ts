import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/utility/constants';
@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent implements OnInit {
  profileImage: string = Constants.profileImage;
  appLogo: string = Constants.appLogo;
  constructor() { }

  ngOnInit(): void {
  }

}
