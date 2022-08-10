import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { OccupantService } from 'src/app/services/occupant.service';
import { IAppState } from 'src/redux/store';
import {
  REMOVE_OCCUPANT,
  REMOVE_OCCUPANT_ERROR,
  REMOVE_OCCUPANT_SUCCESS,
} from 'src/redux/_occupant.store/occupant.actions';

@Component({
  selector: 'app-respondent-list',
  templateUrl: './respondent-list.component.html',
  styleUrls: ['./respondent-list.component.scss'],
})
export class RespondentListComponent implements OnInit {
  @select((s) => s.occupantsList.occupantsList) occupantsList$: any;
  @select((s) => s.occupantsList.isLoading) isLoading$: any;
  list: any;
  constructor(
    private _occupantSvc: OccupantService,
    private ngReux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.occupantsList$.subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.list = response;
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
        }
      },
    });
  }

  onRemove(item: any) {
    console.log('item: ', item);
    this.ngReux.dispatch({ type: REMOVE_OCCUPANT });
    this._occupantSvc.RemoveOccupant(item).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.ngReux.dispatch({
            type: REMOVE_OCCUPANT_SUCCESS,
            payload: item,
          });
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          this.ngReux.dispatch({ type: REMOVE_OCCUPANT_ERROR, payload: err });
        }
      },
    });
  }
}
