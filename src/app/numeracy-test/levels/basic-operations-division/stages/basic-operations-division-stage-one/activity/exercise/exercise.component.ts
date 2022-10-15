import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { BasicOperationsDivisionService } from 'src/app/services/basic-operations/basic-operations-division.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  pageTitle: string = 'Can you add the 1-digit numbers here';
  actionWords: any[] = [];
  gameSessionId: any;

  constructor(
    private _basicOperationsDivisionSvc: BasicOperationsDivisionService,
    private _gameSvc: GameService
  ) {}

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this.gameSession$.subscribe({
      next: (data: any) => {
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  getActionNumbers() {
    let numbersList = this._basicOperationsDivisionSvc.GetActionNumbers();
    console.log('numbersList: ', numbersList);
    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._basicOperationsDivisionSvc.GetresultNumbers();
    console.log('numbersList: ', numbersList);
    // this.resultNumbers = numbersList;
  }

  onSelect(item: any) {}
  onReset() {}
}
