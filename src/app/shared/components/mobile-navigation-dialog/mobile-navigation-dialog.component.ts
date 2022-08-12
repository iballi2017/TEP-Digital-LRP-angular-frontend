import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-mobile-navigation-dialog',
  templateUrl: './mobile-navigation-dialog.component.html',
  styleUrls: ['./mobile-navigation-dialog.component.scss'],
})
export class MobileNavigationDialogComponent implements OnInit, OnDestroy {
  title!: string;
  navItemList!: any[];
  logout!: string;
  Subscriptions: Subscription[] = [];
  currentRoute = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { navData: any },
    private _authSvc: AuthenticationService,
    private _router: Router,
    public dialogRef: MatDialogRef<MobileNavigationDialogComponent>
  ) {}

  ngOnInit(): void {
    console.log('data: ', this.data.navData);
    this.title = this.data.navData.title;
    this.navItemList = this.data.navData.navItemList;
    this.logout = this.data.navData.logout;
    this.onCheckRouteEvents();
  }

  onCheckRouteEvents() {
    let subscription = this._router.events.subscribe({
      next: (event: any) => {
        if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          console.log('Route change detected');
        }

        if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          this.currentRoute = event.url;
          console.log(event);
          // this._messengerSvc.sendOpenSideNavitionMessageBehaviorSubject(false);
          this.closeDialog();
        }

        if (event instanceof NavigationError) {
          // Hide progress spinner or progress bar

          // Present error to user
          console.log(event.error);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
  logoutUser() {
    this._authSvc.logoutUser();
  }

  ngOnDestroy(): void {
    // console.log('destroyed!!!');
    console.log('destroyed!!!', this.Subscriptions);
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
