import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IdentityService } from 'src/app/services/identity.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { AddRespondentComponent } from '../add-respondent/add-respondent.component';

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.scss'],
})
export class MyInformationComponent implements OnInit, OnDestroy {
  @select((s) => s.userDetails.userDetails) userDetails$: any;
  userData: any;
  Subscriptions: Subscription[] = [];

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

    
    let subscription = this.userDetails$.subscribe((e: any) => {
      this.userData = e;
    });
    this.Subscriptions.push(subscription);
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

    let subscription =   dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.Subscriptions.push(subscription);
  }

  onEditPersonalDetails(userData: any) {
    console.log('userData: ', userData);
    this._router.navigate([
      `/account/update-personal-details/${userData?.usr_id}`,
    ]);
  }
  ngOnDestroy(): void {
    console.log('destroyed!!!', this.Subscriptions);
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
