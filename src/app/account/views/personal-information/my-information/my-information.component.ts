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

  editBtnType = 'button';
  editBtnLabel = 'Edit';
  editBtnClasses = 'btn text-uppercase primary-btn';
  editPasswordBtnType = 'button';
  editPasswordBtnLabel = 'EDIT PASSWORD';
  editPasswordBtnClasses = 'btn text-uppercase primary-btn';
  addNewOccupantBtnLabel="Add New";
  addNewOccupantBtnType = "button";
  addNewOccupantBtnClasses="btn primary-bordered-btn test-strong text-uppercase d-none d-lg-block";
  addNewOccupantBtnLabelSmall="";
  addNewOccupantBtnTypeSmall= "button";
  addNewOccupantBtnClassesSmall="btn primary-bordered-btn test-strong text-uppercase d-block d-lg-none"

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

    let subscription = dialogRef.afterClosed().subscribe((result) => {
      
    });
    this.Subscriptions.push(subscription);
  }

  onEditPersonalDetails(userData: any) {
    console.group(userData[0])
    let user = userData[0]
    this._router.navigate([
      `/account/update-personal-details/${user?.usr_id}`,
    ]);
  }


  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
