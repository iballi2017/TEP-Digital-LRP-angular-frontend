import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ForgotPasswordService,
  RegisteredEmail,
} from 'src/app/services/forgot-password.service';
import { IAppState } from 'src/redux/store';
import {
  SEND_REGISTERED_EMAIL,
  SEND_REGISTERED_EMAIL_ERROR,
  SEND_REGISTERED_EMAIL_SUCCESS,
} from 'src/redux/_forgot-password.store/forgot-password.actions';

@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss'],
})
export class AccountEmailComponent implements OnInit {
  @select((s) => s.forgotPassword.sendRegisteredEmailResponse)
  sendRegisteredEmailResponse$: any;
  @select((s) => s.forgotPassword.error)
  error$: any;
  @select((s) => s.forgotPassword.isLoading) isLoading$: any;
  btnTitle = 'Send';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  VerifyEmailForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _forgotPasswordSvc: ForgotPasswordService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.isLoading$.subscribe((load: boolean) => {
      if (load) {
        this.btnTitle = 'Loading...';
      }else{
        this.btnTitle = 'Send';
      }
    });
  }

  buildForm() {
    this.VerifyEmailForm = this._fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: SEND_REGISTERED_EMAIL });
    console.log('this.VerifyEmailForm.value: ', this.VerifyEmailForm.value);
    const Payload: RegisteredEmail = {
      usr_email: this.VerifyEmailForm.value.Email,
    };
    this._forgotPasswordSvc.SendRegisteredEmail(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.ngRedux.dispatch({
            type: SEND_REGISTERED_EMAIL_SUCCESS,
            payload: response.msg,
          });
        }
      },
      error: (err: any) => {
        if (err) {
          console.log('Error: ', err);
          this.ngRedux.dispatch({
            type: SEND_REGISTERED_EMAIL_ERROR,
            payload: err.error.msg,
          });
        }
      },
    });
  }
}
