import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-mobile-navigation-dialog',
  templateUrl: './mobile-navigation-dialog.component.html',
  styleUrls: ['./mobile-navigation-dialog.component.scss'],
})
export class MobileNavigationDialogComponent implements OnInit {
  title!: string;
  navItemList!: any[];
  logout!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { navData: any },private _authSvc: AuthenticationService) {}

  ngOnInit(): void {
    console.log('data: ', this.data.navData);
    this.title = this.data.navData.title;
    this.navItemList = this.data.navData.navItemList;
    this.logout = this.data.navData.logout;
  }

  
  logoutUser() {
    this._authSvc.logoutUser();
  }
}
