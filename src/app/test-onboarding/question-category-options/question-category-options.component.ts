import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GameType } from 'src/app/models/types/game-type';
import { NumberOfUsersInputDialogComponent } from '../components/number-of-users-input-dialog/number-of-users-input-dialog.component';
import { TestRespondentSelectionComponent } from '../components/test-respondent-selection/test-respondent-selection.component';

@Component({
  selector: 'app-question-category-options',
  templateUrl: './question-category-options.component.html',
  styleUrls: ['./question-category-options.component.scss'],
})
export class QuestionCategoryOptionsComponent implements OnInit {
  QuestionCategoryForm!: FormGroup;
  LiteracyGameType = GameType.LITERACY;
  NumeracyGameType = GameType.NUMERACY;
  constructor(private _fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.QuestionCategoryForm = this._fb.group({
      QuestionCategory: '',
    });
  }

  openNumberOfUsersInputDialog(QuestionCategory: string) {
    // const dialogRef = this.dialog.open(NumberOfUsersInputDialogComponent, {
    //   width: '100%',
    //   // maxWidth: '500px',
    //   data: {
    //     QuestionCategory: QuestionCategory,
    //   },
    // });

    const dialogRef = this.dialog.open(TestRespondentSelectionComponent, {
      // width: '100%',
      // maxWidth: '500px',
      data: {
        QuestionCategory: QuestionCategory,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.QuestionCategoryForm?.reset();
    });
  }

  onSubmit(QuestionCategoryForm: any) {
    this.openNumberOfUsersInputDialog(QuestionCategoryForm.value);
  }
}
