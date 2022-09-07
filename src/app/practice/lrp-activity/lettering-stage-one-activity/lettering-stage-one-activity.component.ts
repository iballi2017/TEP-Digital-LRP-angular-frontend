import { Component, OnInit } from '@angular/core';
import {
  Alphabet,
  AlphabetType,
  LrpActivityService,
} from '../services/lrp-activity.service';

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
  consonants!: Alphabet[];
  constructor(private _lrpActivitySvc: LrpActivityService) {}

  ngOnInit(): void {
    this.onGetAlphabet();
  }

  onGetAlphabet() {
    this.alphabets = this._lrpActivitySvc.GetAlphabet();
    this.vowels = this.alphabets.filter(
      (alphabet) => alphabet.type == AlphabetType.VOWEL && alphabet.isChecked
    );
    this.consonants = this.alphabets.filter(
      (alphabet) =>
        alphabet.type == AlphabetType.CONSONANT && alphabet.isChecked
    );
  }

  onChecked() {
    this.onGetAlphabet();
  }
}
