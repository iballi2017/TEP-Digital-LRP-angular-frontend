import { Component, OnInit } from '@angular/core';

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
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
