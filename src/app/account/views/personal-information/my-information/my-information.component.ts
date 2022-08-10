import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IdentityService } from 'src/app/services/identity.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { AddRespondentComponent } from '../add-respondent/add-respondent.component';

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.scss'],
})
export class MyInformationComponent implements OnInit {
  @select((s) => s.userDetails.userDetails) userDetails$: any;
  userData: any;

  constructor(
    private _identitySvc: IdentityService,
    private _authSvc: AuthenticationService,
    private _occupantSvc: OccupantService,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.getOccupantList();

    
    this.userDetails$.subscribe((e: any) => {
      this.userData = e;
    });
  }

  getUserData() {
    // let userData = this._identitySvc.getLoggedInUserData();
    // console.log('  userData: ', userData);
    // this._identitySvc.getUserById(userData.user_id).subscribe({
    //   next: (response: any) => {
    //     console.log('response: ', response);
    //     this.userData = response?.data;
    //   },
    //   error: (err: any) => {
    //     console.warn('Error: ', err);
    //   },
    // });
    this.userData = this._identitySvc.getUserById();
  }

  getOccupantList() {
    this._occupantSvc.LoadOccupants();
  }

  openRespondentListDialog() {
    const dialogRef = this.dialog.open(AddRespondentComponent, {
      width: '100%',
      maxWidth: '600px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditPersonalDetails(userData: any) {
    console.log('userData: ', userData);
    this._router.navigate([
      `/account/update-personal-details/${userData?.usr_id}`,
    ]);
  }
}
