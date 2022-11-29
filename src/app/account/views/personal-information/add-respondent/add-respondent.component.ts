import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { IAppState } from 'src/redux/store';
import {
  ADD_OCCUPANT,
  ADD_OCCUPANT_ERROR,
  ADD_OCCUPANT_SUCCESS,
} from 'src/redux/_occupant.store/occupant.actions';

@Component({
  selector: 'app-add-respondent',
  templateUrl: './add-respondent.component.html',
  styleUrls: ['./add-respondent.component.scss'],
})
export class AddRespondentComponent implements OnInit, OnDestroy {
  @select((s) => s.occupantsList.isLoading) isLoading$: any;
  @select((s) => s.occupantsList.error) error$: any;
  errorMsg!: string;
  submitBtnLabel = 'Add Respondent';
  nigerianStateList!: string[];
  num: number = 7;
  agesList: number[] = [];
  AddRespondentForm!: FormGroup;
  Subscriptions: Subscription[] = [];
  responseMessage: any;
  constructor(
    private _locationSvc: LocationService,
    private _fb: FormBuilder,
    private _occupantSvc: OccupantService,
    private ngRedux: NgRedux<IAppState>,
    public dialogRef: MatDialogRef<AddRespondentComponent>
  ) { }

  ngOnInit(): void {
    this.onGetNigerianStates();
    this.buildForm();
    let x: number = this.num;
    this.createNumberArray(x);
    this.onErrorMsg();
  }

  createNumberArray(d: number) {
    while (d < 12) {
      this.agesList.push(d);
      d++;
    }
  }

  buildForm() {
    this.AddRespondentForm = this._fb.group({
      FullName: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Location: ['', [Validators.required]],
    });
  }

  onGetNigerianStates() {
    this.nigerianStateList = this._locationSvc.getNigerianStates();
  }

  onSubmit() {
    const Payload = {
      occ_name: this.AddRespondentForm.value.FullName,
      occ_state: this.AddRespondentForm.value.Location,
      occ_age: this.AddRespondentForm.value.Age,
      occ_gender: this.AddRespondentForm.value.Gender,
    };
    this.ngRedux.dispatch({ type: ADD_OCCUPANT });
    let subscription = this._occupantSvc.AddOccupant(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log("response: ", response)
          console.warn("response: ", response)
          this.responseMessage = response?.message;
          this.ngRedux.dispatch({
            type: ADD_OCCUPANT_SUCCESS,
            payload: response,
          });
          this._occupantSvc.LoadOccupants();
          setTimeout(() => {
            this.closeDialog();
          }, 3000);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err?.error?.message);
        this.ngRedux.dispatch({
          type: ADD_OCCUPANT_ERROR,
          payload: err?.error?.message,
        });
        this.onErrorMsg();
      },
    });
    this.Subscriptions.push(subscription);
  }

  closeDialog() {
    this.dialogRef.close('Form closed!');
  }

  onErrorMsg() {
    this.error$.subscribe({
      next: (errorMsg: any) => {
        if (errorMsg) {
          this.errorMsg = errorMsg;
          setTimeout(() => {
            this.errorMsg = '';
          }, 4000);
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
