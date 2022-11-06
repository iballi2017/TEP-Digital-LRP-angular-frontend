import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-literacy-test-side-navigation',
  templateUrl: './literacy-test-side-navigation.component.html',
  styleUrls: ['./literacy-test-side-navigation.component.scss']
})
export class LiteracyTestSideNavigationComponent implements OnInit {
  @Input()title!:string;
  @Input()navItemList!:any[];
  @Input()logout!:string;

  constructor(private _authSvc: AuthenticationService) { }

  ngOnInit(): void {
  }

  

  logoutUser() {
    this._authSvc.logoutUser();
  }

}
