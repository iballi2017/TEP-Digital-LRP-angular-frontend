import { NgRedux, select } from '@angular-redux/store';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { IAppState } from 'src/redux/store';
import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_SUCCESS,
} from 'src/redux/_userDetails.store/user-details.actions';
import { IdentityService } from './services/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  isSubmittingData!: any;
  title = 'tep-digital-lrp';
  constructor(
    private _identitySvc: IdentityService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit(): void {
  }
}
