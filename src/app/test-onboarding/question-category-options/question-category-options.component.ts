import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
import { GameType } from 'src/app/models/types/game-type';
=======
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4
import { NumberOfUsersInputDialogComponent } from '../components/number-of-users-input-dialog/number-of-users-input-dialog.component';
import { TestRespondentSelectionComponent } from '../components/test-respondent-selection/test-respondent-selection.component';

@Component({
  selector: 'app-question-category-options',
  templateUrl: './question-category-options.component.html',
  styleUrls: ['./question-category-options.component.scss'],
})
export class QuestionCategoryOptionsComponent implements OnInit {
  QuestionCategoryForm!: FormGroup;
<<<<<<< HEAD
  LiteracyGameType = GameType.LITERACY;
  NumeracyGameType = GameType.NUMERACY;
  constructor(private _fb: FormBuilder, public dialog: MatDialog) { }
=======
  constructor(private _fb: FormBuilder, public dialog: MatDialog) {}
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4

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
<<<<<<< HEAD

=======
    
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4
    const dialogRef = this.dialog.open(TestRespondentSelectionComponent, {
      // width: '100%',
      // maxWidth: '500px',
      data: {
        QuestionCategory: QuestionCategory,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
<<<<<<< HEAD
=======
      
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4
      this.QuestionCategoryForm?.reset();
    });
  }

  onSubmit(QuestionCategoryForm: any) {
    this.openNumberOfUsersInputDialog(QuestionCategoryForm.value);
  }
}
