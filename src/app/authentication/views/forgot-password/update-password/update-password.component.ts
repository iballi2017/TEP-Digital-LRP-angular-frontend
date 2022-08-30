import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AuthenticationService,
  ChangePasswordData,
} from 'src/app/services/authentication.service';
import { IAppState } from 'src/redux/store';
import {
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PASSWORD_ERROR,
  UPDATE_USER_PASSWORD_SUCCESS,
} from 'src/redux/_forgot-password.store/forgot-password.actions';

function passwordMatchValidator(form: any) {
  const NewPassword = form.get('NewPassword');
  const ConfirmNewPassword = form.get('ConfirmNewPassword');

  if (NewPassword.value != ConfirmNewPassword.value) {
    ConfirmNewPassword.setErrors({ PasswordsMatch: true });
  } else {
    ConfirmNewPassword.setErrors(null);
  }
  return null;
}

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
  @select((s) => s.forgotPassword.updateUserPasswordResponse)
  updateUserPasswordResponse$: any;
  @select((s) => s.forgotPassword.error)
  error$: any;
  @select((s) => s.forgotPassword.isLoading) isLoading$: any;
  btnTitle = 'Submit';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  UpdatePasswordForm!: FormGroup;
  verificationCode!: string;
  verificationCode2: any;
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    private ngRedux: NgRedux<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getUrlParams();
    this.isLoading$.subscribe((load: boolean) => {
      if (load) {
        this.btnTitle = 'Loading...';
      } else {
        this.btnTitle = 'Submit';
      }
    });
  }

  buildForm() {
    this.UpdatePasswordForm = this._fb.group(
      {
        NewPassword: ['', [Validators.required]],
        ConfirmNewPassword: ['', [Validators.required]],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  getUrlParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        // f45a912c/13f6729dc63dbb858682f174725db8
        if (params) {
          console.log(params);
          this.verificationCode = params.get('verification-code1');
          this.verificationCode2 = params.get('verification-code2');
          console.log('this.verificationCode: ', this.verificationCode);
          console.log('this.verificationCode2: ', this.verificationCode2);
        }
      },
    });
  }

  onSubmit() {
    console.log(
      'this.UpdatePasswordForm.value: ',
      this.UpdatePasswordForm.value
    );
    if (
      this.UpdatePasswordForm.value.NewPassword ===
      this.UpdatePasswordForm.value.ConfirmNewPassword
    ) {
      const Payload: ChangePasswordData = {
        reset_selector: this.verificationCode,
        usr_password: this.UpdatePasswordForm.value.NewPassword,
      };
      console.log('Payload: ', Payload);

      this.ngRedux.dispatch({ type: UPDATE_USER_PASSWORD });
      this._authSvc.resetUserPassword(Payload).subscribe({
        next: (response: any) => {
          if (response) {
            console.log('response: ', response);
            this.ngRedux.dispatch({
              type: UPDATE_USER_PASSWORD_SUCCESS,
              payload: response,
            });
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error: ', err);
            this.ngRedux.dispatch({
              type: UPDATE_USER_PASSWORD_ERROR,
              payload: err?.error?.message,
            });
          }
        },
      });
    }
  }
}
