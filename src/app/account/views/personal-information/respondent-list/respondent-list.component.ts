import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OccupantService } from 'src/app/services/occupant.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/components/boolean-alert-dialog/boolean-alert-dialog.component';
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
export class RespondentListComponent implements OnInit, OnDestroy {
  @select((s) => s.occupantsList.occupantsList) occupantsList$: any;
  @select((s) => s.occupantsList.isLoading) isLoading$: any;
  list: any;
  Subscriptions: Subscription[] = [];
  dangerBtnTitle = 'Delete';
  primaryBtnTitle = "Edit"
  constructor(
    private _occupantSvc: OccupantService,
    private ngReux: NgRedux<IAppState>,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let subscription = this.occupantsList$.subscribe({
      next: (response: any) => {
        if (response) {
          // console.log('response: ', response);
          this.list = response;
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
        }
      },
    });
    this.Subscriptions.push(subscription);
  }

  onViewRespondentDetails(item: any) {
    this._router.navigate(['account/respondent-details/', item?.occ_id]);
  }

  onRemove(item: any) {
    this.openDialog(item);
  }
  openDialog(item: any) {
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
      if (result) {
        this.onDeleteOccupant(item);
      }
    });
  }

  onDeleteOccupant(Occupant: any) {
    this.ngReux.dispatch({ type: REMOVE_OCCUPANT });
    let subscription = this._occupantSvc.RemoveOccupant(Occupant).subscribe({
      next: (response: any) => {
        if (response) {
          // console.log('response: ', response);
          this.ngReux.dispatch({
            type: REMOVE_OCCUPANT_SUCCESS,
            payload: Occupant,
          });
        }
      },
      error: (err: any) => {
        if (err) {
          // console.warn('Error: ', err);
          this.ngReux.dispatch({
            type: REMOVE_OCCUPANT_ERROR,
            payload: err,
          });
        }
      },
    });
    this.Subscriptions.push(subscription);
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
