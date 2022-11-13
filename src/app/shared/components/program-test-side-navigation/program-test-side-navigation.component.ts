import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-program-test-side-navigation',
  templateUrl: './program-test-side-navigation.component.html',
  styleUrls: ['./program-test-side-navigation.component.scss']
})
export class ProgramTestSideNavigationComponent implements OnInit {
  @Input() title!: string;
  @Input() navItemList!: any[];
  @Input() logout!: string;

  constructor(private _authSvc: AuthenticationService) { }

  ngOnInit(): void {
    console.log("navItemList desktop: ", this.navItemList)
  }



  logoutUser() {
    this._authSvc.logoutUser();
  }

}
