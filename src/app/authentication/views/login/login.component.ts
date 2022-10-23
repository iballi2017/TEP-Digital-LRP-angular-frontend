import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IAppState } from 'src/redux/store';
import {
  ADD_LOGINUSER,
  ADD_LOGINUSER_FAILURE,
  ADD_LOGINUSER_SUCCESS,
} from 'src/redux/_login-user-store/login-user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitBtnLabel:string = 'Enter';
  LoginUserForm!: FormGroup;
  @select((s) => s.LoginUser.isLoading) isLoading: any;
  @select((s) => s.LoginUser.error) error$: any;
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    private ngRedux: NgRedux<IAppState>,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.LoginUserForm = this._fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const Payload = {
      usr_email: this.LoginUserForm.value.Email,
      usr_password: this.LoginUserForm.value.Password,
    };
    if (this.LoginUserForm.valid) {
      this.ngRedux.dispatch({ type: ADD_LOGINUSER });
      this._authSvc.LoginUser(Payload).subscribe({
        next: (response: any) => {
          
          if(response){
            // setTimeout(() => {
              this.ngRedux.dispatch({
                type: ADD_LOGINUSER_SUCCESS,
                payload: response,
              });
            // }, 6000);
          }
        },
        error: (err: any) => {
          console.warn('Error: ', err);
          this.ngRedux.dispatch({
            type: ADD_LOGINUSER_FAILURE,
            payload: err?.error?.message,
          });
        },
      });
    }
  }
}
