import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddRespondentComponent } from 'src/app/account/views/personal-information/add-respondent/add-respondent.component';
import {
  GameSessionData,
  GameType,
  StartGame,
} from 'src/app/models/types/game';
import { GameService } from 'src/app/services/game.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { IAppState } from 'src/redux/store';
import {
  ADD_GAME_SESSION,
  ADD_GAME_SESSION_SUCCESS,
  FETCH_GAME_SESSION_ERROR,
} from 'src/redux/_game.store/game.actions';

@Component({
  selector: 'app-test-respondent-selection',
  templateUrl: './test-respondent-selection.component.html',
  styleUrls: ['./test-respondent-selection.component.scss'],
})
export class TestRespondentSelectionComponent implements OnInit {
  title = 'SELECT NAME OF THE CHILD TAKING THE TEST';
  @select((s) => s.occupantsList.occupantsList) occupantsList$: any;
  @select((s) => s.game.isLoading) gameIsLoading$: any;
  RespondentSelectionForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TestRespondentSelectionComponent>,
    public dialog: MatDialog,
    private _occupantSvc: OccupantService,
    private _fb: FormBuilder,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getOccupantList();
    this.buildForm();

    let isGame = this._gameSvc.IsGame();
    console.log('IsGame: ', isGame);
  }
  getOccupantList() {
    this._occupantSvc.LoadOccupants();
  }

  buildForm() {
    this.RespondentSelectionForm = this._fb.group({
      RespondentId: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_GAME_SESSION });
    console.log(
      'RespondentSelectionForm: ',
      this.RespondentSelectionForm.value
    );
    const Payload: StartGame = {
      occ_id: this.RespondentSelectionForm.value.RespondentId,
      game_type: GameType.Literacy,
    };
    console.log('Payload: ', Payload);
    this._gameSvc.StartGame(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.ngRedux.dispatch({
            type: ADD_GAME_SESSION_SUCCESS,
            payload: response,
          });
          this._router.navigate(['/literacy/levels/lettering']);
          this.closeDialog();
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          this.ngRedux.dispatch({
            type: FETCH_GAME_SESSION_ERROR,
            payload: err,
          });
        }
      },
    });
    // const data = JSON.parse(this.RespondentSelectionForm.value.Respondent);
    // console.log('data: ', data);

    // if (this.RespondentSelectionForm.valid) {
    //   const data = JSON.parse(this.RespondentSelectionForm.value.Respondent);
    //   console.log('data: ', data);
    // }
  }
  closeDialog() {
    this.dialogRef.close('dialod closed!');
  }

  openAddNewRespondentDialog() {
    this.dialogRef.close('dialod closed!');
    const dialogRef = this.dialog.open(AddRespondentComponent, {
      width: '100%',
      maxWidth: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
