import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateUserModel } from 'src/app/models/types/user';
import { IdentityService } from 'src/app/services/identity.service';
import { IAppState } from 'src/redux/store';
import {
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_ERROR,
  UPDATE_USER_DETAILS_SUCCESS,
} from 'src/redux/_userDetails.store/user-details.actions';

@Component({
  selector: 'app-update-personal-details',
  templateUrl: './update-personal-details.component.html',
  styleUrls: ['./update-personal-details.component.scss'],
})
export class UpdatePersonalDetailsComponent implements OnInit {
  @select((s) => s.userDetails.userDetails) userDetails$: any;
  @select((s) => s.userDetails.isLoading) isLoading: any;
  userData: any;
  submitBtnLabel: string = 'Save';
  UpdatePersonalDetailsForm!: FormGroup;

  constructor(
    private _identitySvc: IdentityService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    // this.onGetParams();
    this.isLoading.subscribe((l: boolean) => {
      if (l) {
        this.submitBtnLabel = 'Saving...';
      } else {
        this.submitBtnLabel = 'Save';
      }
    });

    this.userDetails$.subscribe((e: any) => {
      this.userData = e;
      this.getUserData(e);
    });
  }

  // onGetParams() {
  //   this._route.paramMap.subscribe({
  //     next: (params: any) => {
  //       console.log('params: ', params);
  //       let userId = params.get('userId');
  //       console.log('userId: ', userId);
  //     },
  //     error: (err: any) => {
  //       console.log('Error: ', err);
  //     },
  //   });
  // }

  buildForm() {
    this.UpdatePersonalDetailsForm = this._fb.group({
      FullName: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required, Validators.email]],
      Party: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
    });
  }

  getUserData(data: any) {
    this.UpdatePersonalDetailsForm.controls['FullName'].setValue(
      data?.usr_fullname
    );
    this.UpdatePersonalDetailsForm.controls['EmailAddress'].setValue(
      data?.usr_email
    );
    this.UpdatePersonalDetailsForm.controls['Party'].setValue(data?.usr_party);
    this.UpdatePersonalDetailsForm.controls['Gender'].setValue(
      data?.usr_gender
    );
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: UPDATE_USER_DETAILS });
    console.log(
      'this.UpdatePersonalDetailsForm: ',
      this.UpdatePersonalDetailsForm.value
    );
    const Payload: UpdateUserModel = {
      usr_fullname: this.UpdatePersonalDetailsForm.value.FullName,
      usr_gender: this.UpdatePersonalDetailsForm.value.Gender,
    };
    this._identitySvc.UpdateUserDetails(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.ngRedux.dispatch({
            type: UPDATE_USER_DETAILS_SUCCESS,
            payload: {
              response: response,
              data: Payload,
            },
          });
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          this.ngRedux.dispatch({
            type: UPDATE_USER_DETAILS_ERROR,
            payload: err,
          });
        }
      },
    });
  }

  back() {
    history.back();
  }
}
