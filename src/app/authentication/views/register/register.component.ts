import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/types/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IAppState } from 'src/redux/store';
import {
  ADD_REGISTER_USER,
  ADD_REGISTER_USER_FAILURE,
  ADD_REGISTER_USER_SUCCESS,
} from 'src/redux/_register-user-store/register-user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  submitBtnLabel: string = 'Register';
  RegisterUserForm!: FormGroup;
  @select((s) => s.RegisterUser.isLoading) isLoading: any;
  @select((s) => s.RegisterUser.RegisteredUser?.message) RegisteredUser: any;
  @select((s) => s.RegisterUser.error) error: any;
  isRegistered!: boolean;
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.RegisterUserForm = this._fb.group({
      FullName: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required, Validators.email]],
      Party: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const Payload: UserRegister = {
      usr_fullname: this.RegisterUserForm.value.FullName,
      usr_email: this.RegisterUserForm.value.EmailAddress,
      usr_party: this.RegisterUserForm.value.Party,
      usr_gender: this.RegisterUserForm.value.Gender,
      usr_password: this.RegisterUserForm.value.Password,
    };
    // const Payload: any = {
    //   usr_fullname: this.RegisterUserForm.value.FullName,
    //   usr_email: this.RegisterUserForm.value.FullName,
    //   usr_party: this.RegisterUserForm.value.FullName,
    //   usr_gender: this.RegisterUserForm.value.FullName,
    //   // usr_password: this.RegisterUserForm.value.FullName,
    // };
    
    if (this.RegisterUserForm.valid) {
      this.ngRedux.dispatch({ type: ADD_REGISTER_USER });
      this._authSvc.RegisterUser(Payload).subscribe({
        next: (response: any) => {
          
          if (response) {
            setTimeout(() => {
              this.ngRedux.dispatch({
                type: ADD_REGISTER_USER_SUCCESS,
                payload: response,
              });
              this.isRegistered = true;
              this.RegisterUserForm.reset();
            }, 6000);
            // this.ngRedux.dispatch({
            //   type: ADD_REGISTERUSER_SUCCESS,
            //   payload: response,
            // });
          }
        },
        error: (err: any) => {
          console.warn('Error: ', err);
          this.ngRedux.dispatch({
            type: ADD_REGISTER_USER_FAILURE,
            payload: err.error?.message,
          });
        },
      });
    }
  }
}
