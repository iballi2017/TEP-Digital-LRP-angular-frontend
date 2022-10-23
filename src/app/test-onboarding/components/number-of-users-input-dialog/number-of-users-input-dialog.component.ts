import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-of-users-input-dialog',
  templateUrl: './number-of-users-input-dialog.component.html',
  styleUrls: ['./number-of-users-input-dialog.component.scss'],
})
export class NumberOfUsersInputDialogComponent implements OnInit {
  count: number = 1;
  NumberOfUsersForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<NumberOfUsersInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { QuestionCategory: string },
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.NumberOfUsersForm = this._fb.group({
      // NumberOfUsers: this.count,
    });
  }

  onIncreament() {
    this.count++;
  }

  onDecreament() {
    if (!(this.count < 2)) {
      this.count--;
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onSubmit() {
    let category = this.data.QuestionCategory;
    const Payload = Object.assign(this.NumberOfUsersForm.value, category, {
      NumberOfUsers: this.count,
    });
    
  }
}
