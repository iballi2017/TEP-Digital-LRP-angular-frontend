import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NumberOfUsersInputDialogComponent } from '../components/number-of-users-input-dialog/number-of-users-input-dialog.component';

@Component({
  selector: 'app-question-category-options',
  templateUrl: './question-category-options.component.html',
  styleUrls: ['./question-category-options.component.scss'],
})
export class QuestionCategoryOptionsComponent implements OnInit {
  QuestionCategoryForm!: FormGroup;
  constructor(private _fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.QuestionCategoryForm = this._fb.group({
      QuestionCategory: '',
    });
  }

  openNumberOfUsersInputDialog(QuestionCategory: string) {
    const dialogRef = this.dialog.open(NumberOfUsersInputDialogComponent, {
      data: {
        QuestionCategory: QuestionCategory,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.QuestionCategoryForm?.reset();
    });
  }

  onSubmit(QuestionCategoryForm: any) {
    console.log('QuestionCategoryForm: ', QuestionCategoryForm.value);
    this.openNumberOfUsersInputDialog(QuestionCategoryForm.value);
  }
}
