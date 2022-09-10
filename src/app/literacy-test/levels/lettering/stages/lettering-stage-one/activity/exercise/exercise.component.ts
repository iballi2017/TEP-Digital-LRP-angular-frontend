import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { GameService } from 'src/app/services/game.service';
import {
  Alphabet,
  AlphabetType,
} from 'src/assets/data/lettering-stage-alphabets';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  alphabets!: Alphabet[];
  vowel = AlphabetType.VOWEL;
  consonant = AlphabetType.CONSONANT;
  vowels!: Alphabet[];
  selectedAlphabets: any[] = [];
  consonants!: Alphabet[];
  isFinishedMessage!: string;
  gameSessionId: any;
  successMessage: any;
  constructor(
    private _activitySvc: ActivityService,
    private _router: Router,
    private _gameSvc: GameService
  ) {}

  ngOnInit(): void {
    this.onGetAlphabet();
    this.onGetGameSessionId();
    this._gameSvc.LoadGameSession();
  }

  onGetGameSessionId() {
    this.gameSession$.subscribe({
      next: (data: any) => {
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  onGetAlphabet() {
    this.alphabets = this._activitySvc.GetAlphabet();
    this.vowels = this.alphabets.filter(
      (alphabet) => alphabet.type == AlphabetType.VOWEL && alphabet.isChecked
    );
    this.consonants = this.alphabets.filter(
      (alphabet) =>
        alphabet.type == AlphabetType.CONSONANT && alphabet.isChecked
    );
  }

  onSelected(Alphabet: any) {
    let itemExists = false;
    let AlphabetItem = {
      id: Alphabet.id,
      name: Alphabet.name,
      type: Alphabet.type,
    };
    if (!this.selectedAlphabets.length) {
      this.selectedAlphabets.push(AlphabetItem);
    } else {
      for (let item of this.selectedAlphabets) {
        // console.log('item: ', item);
        if (item?.id == Alphabet?.id) {
          // console.log(item, ' exists');
          itemExists = true;
        }
      }
      if (!itemExists) {
        this.selectedAlphabets.push(AlphabetItem);
      }
    }

    if (this.vowels.length == 5) {
      this.onSumbit();
    }
  }

  onChecked() {
    this.onGetAlphabet();
  }

  onSumbit() {
    const Payload: LetteringStageOneAnswer = {
      session_id: this.gameSessionId,
      anwser: '1',
      result: this.selectedAlphabets,
    };
    console.log('Payload: ', Payload);

    this._gameSvc.SubmitLetteringStageOneResult(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.successMessage = response?.message;

          console.log(Payload, ' submitted!');
          this.isFinishedMessage =
            'You have completed this level with ' +
            this.consonants?.length +
            ' wrong answers!';
          console.log('Payload: ', this.isFinishedMessage);

          setTimeout(() => {
            this.isFinishedMessage = '';
            this.successMessage = ''
          }, 10000);

          alert('completed!!!');
          // this._router.navigate(['/literacy/stage-completion']);
        }
      },
      error: (err: any) => {
        if (err) {
          console.log('Error: ', err);
        }
      },
    });
  }
}

export interface LetteringStageOneAnswer {
  session_id: string;
  anwser: string;
  result: any[];
}
