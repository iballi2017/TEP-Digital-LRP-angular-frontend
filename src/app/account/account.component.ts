import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { LiteracyTestSideNavigationComponent } from '../literacy-test/components/literacy-test-side-navigation/literacy-test-side-navigation.component';
import { LiteracyTestSideNavigationComponent } from '../shared/components/literacy-test-side-navigation/literacy-test-side-navigation.component';
import { MobileNavigationDialogComponent } from '../shared/components/mobile-navigation-dialog/mobile-navigation-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  title = 'ACCOUNT';
  literacyTestSideNavTitle = 'My Account';
  logout = 'Logout';
  menuList = [
    {
      title: 'ACCOUNT',
    },
  ];
  // navItemList: navItem[] = [
  navItemList: any[] = [
    {
      name: 'My Information',
      url: '/account/personal-information',
    },
    {
      name: 'Reports',
      url: '/account/reports',
    },
    {
      name: 'About the app',
      url: '/account/about-the-app',
    },
    {
      name: 'Contact Us',
      url: '/account/contact-us',
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onOpenMenu() {
    const dialogRef = this.dialog.open(MobileNavigationDialogComponent, {
      width: '100%',
      data: {
        navData: {
          title: this.literacyTestSideNavTitle,
          navItemList: this.navItemList,
          logout: this.logout,
        },
      },
    });
    // const dialogRef = this.dialog.open(LiteracyTestSideNavigationComponent, {
    //   width: '100%',
    // });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
