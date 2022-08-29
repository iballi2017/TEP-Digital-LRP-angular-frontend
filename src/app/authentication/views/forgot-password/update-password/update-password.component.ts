import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  btnTitle = 'Submit';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  UpdatePasswordForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.UpdatePasswordForm = this._fb.group({
      NewPassword: ['', [Validators.required]],
      ConfirmNewPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('this.UpdatePasswordForm.value: ', this.UpdatePasswordForm.value);
  }
}
