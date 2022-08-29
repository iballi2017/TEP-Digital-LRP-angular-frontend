import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-email-code',
  templateUrl: './verify-email-code.component.html',
  styleUrls: ['./verify-email-code.component.scss']
})
export class VerifyEmailCodeComponent implements OnInit {
  btnTitle = 'Verify';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  VerifyEmailCodeForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.VerifyEmailCodeForm = this._fb.group({
      VerificationCode: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('this.VerifyEmailCodeForm.value: ', this.VerifyEmailCodeForm.value);
  }
}
