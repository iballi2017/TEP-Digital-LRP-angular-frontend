import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss'],
})
export class AccountEmailComponent implements OnInit {
  btnTitle = 'Send';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  VerifyEmailForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.VerifyEmailForm = this._fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log('this.VerifyEmailForm.value: ', this.VerifyEmailForm.value);
  }
}
