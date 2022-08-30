import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();  this.isLoading$.subscribe((load: boolean) => {
      if (load) {
        this.btnTitle = 'Loading...';
      }else{
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
        reset_selector: 'b13bdf2f',
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
