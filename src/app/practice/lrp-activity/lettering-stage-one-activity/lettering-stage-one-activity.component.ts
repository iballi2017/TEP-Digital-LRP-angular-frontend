import { Component, OnInit } from '@angular/core';
import {
  Alphabet,
  AlphabetType,
  LrpLetteringActivityService,
} from '../services/lrp-lettering-activity.service';

@Component({
  selector: 'app-lettering-stage-one-activity',
  templateUrl: './lettering-stage-one-activity.component.html',
  styleUrls: ['./lettering-stage-one-activity.component.scss'],
})
export class LetteringStageOneActivityComponent implements OnInit {
  alphabets!: Alphabet[];
  vowel = AlphabetType.VOWEL;
  consonant = AlphabetType.CONSONANT;
  vowels!: Alphabet[];
  selectedAlphabets: any[] = [];
  consonants!: Alphabet[];
  isFinishedMessage!: string;
  constructor(private _lrpLetteringActivitySvc: LrpLetteringActivityService) {}

  ngOnInit(): void {
    this.onGetAlphabet();
  }

  onGetAlphabet() {
    this.alphabets = this._lrpLetteringActivitySvc.GetAlphabet();
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
      session_id: '8f8d98a7-6d75-4428b9ae',
      anwser: '1',
      data: [],
    };

    console.log(Payload, ' submitted!');
    this.isFinishedMessage =
      'You have completed this level with ' +
      this.consonants?.length +
      ' wrong answers!';
      console.log("Payload: ", this.isFinishedMessage);

    setTimeout(() => {
      this.isFinishedMessage = '';
    }, 3000);
  }
}

export interface LetteringStageOneAnswer {
  session_id: string;
  anwser: string;
  data: any[];
}
