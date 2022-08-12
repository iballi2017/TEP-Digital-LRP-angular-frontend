import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddRespondentComponent } from 'src/app/account/views/personal-information/add-respondent/add-respondent.component';
import { OccupantService } from 'src/app/services/occupant.service';

@Component({
  selector: 'app-test-respondent-selection',
  templateUrl: './test-respondent-selection.component.html',
  styleUrls: ['./test-respondent-selection.component.scss'],
})
export class TestRespondentSelectionComponent implements OnInit {
  title = 'SELECT NAME OF THE CHILD TAKING THE TEST';
  @select((s) => s.occupantsList.occupantsList) occupantsList$: any;
  RespondentSelectionForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TestRespondentSelectionComponent>,
    public dialog: MatDialog,
    private _occupantSvc: OccupantService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getOccupantList();
    this.buildForm();
  }
  getOccupantList() {
    this._occupantSvc.LoadOccupants();
  }

  buildForm() {
    this.RespondentSelectionForm = this._fb.group({
      Respondent: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log(
      'RespondentSelectionForm: ',
      this.RespondentSelectionForm.value
    );
    const data = JSON.parse(this.RespondentSelectionForm.value.Respondent);
    console.log('data: ', data);

    if (this.RespondentSelectionForm.valid) {
      const data = JSON.parse(this.RespondentSelectionForm.value.Respondent);
      console.log('data: ', data);
    }
  }
  closeDialog() {
    this.dialogRef.close('dialod closed!');
  }

  openAddNewRespondentDialog() {
    this.dialogRef.close('dialod closed!');
    const dialogRef = this.dialog.open(AddRespondentComponent, {
      width: '100%',
      maxWidth: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
