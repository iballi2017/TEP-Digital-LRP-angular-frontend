import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdatePassword } from 'src/app/models/types/user';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
  UpdatePasswordForm!: FormGroup;
  isLoading!: boolean;
  submitBtnLabel = 'Update';
  errorMsg: any;
  responseMsg: any;
  constructor(
    private _fb: FormBuilder,
    private _identitySvc: IdentityService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.UpdatePasswordForm = this._fb.group({
      OldPassword: ['', [Validators.required]],
      NewPassword: ['', [Validators.required, Validators.email]],
      ConfirmNewPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('UpdatePasswordForm: ', this.UpdatePasswordForm.value);

    this.isLoading = true;
    this.submitBtnLabel = 'Loading...';
    const Payload: UpdatePassword = {
      current_password: this.UpdatePasswordForm.value.OldPassword,
      new_password: this.UpdatePasswordForm.value.NewPassword,
      confirm_password: this.UpdatePasswordForm.value.ConfirmNewPassword,
    };
    this._identitySvc.UpdateUserPassword(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.UpdatePasswordForm.reset();
          this.isLoading = false;
          this.submitBtnLabel = 'Update';
          this.responseMsg = response.msg;
          setTimeout(() => {
            this.responseMsg = '';
          }, 3000);
        }
      },
      error: (err: any) => {
        if (err) {
          console.log('Error: ', err);
          this.isLoading = false;
          this.submitBtnLabel = 'Update';
          this.errorMsg = err?.error?.msg;
          setTimeout(() => {
            this.errorMsg = '';
          }, 3000);
        }
      },
    });
  }

  back() {
    history.back();
  }
}
