import { Component, OnInit } from '@angular/core';
import {
  Alphabet,
  AlphabetType,
  LrpLetteringActivityService,
} from '../services/lrp-lettering-activity.service';

@Component({
  selector: 'app-lettering-stage-two-activity',
  templateUrl: './lettering-stage-two-activity.component.html',
  styleUrls: ['./lettering-stage-two-activity.component.scss'],
})
export class LetteringStageTwoActivityComponent implements OnInit {
  alphabets!: Alphabet[];
  consonants!: Alphabet[];
  consonant = AlphabetType.CONSONANT;
  inputDate: any[] = [];
  selectedAlphabets: any[] = [];

  constructor(private _lrpLetteringActivitySvc: LrpLetteringActivityService) {}

  ngOnInit(): void {
    this.getConsonantLetters();
  }

  getConsonantLetters() {
    this.alphabets = this._lrpLetteringActivitySvc.GetAlphabet();
    this.consonants = this.alphabets.filter(
      (alphabet) => alphabet.type == AlphabetType.CONSONANT
    );

    console.log(' this.consonants: ', this.consonants);
  }

  onChecked() {}

  onSelected(Alphabet: any) {
    console.log('Alphabet: ', Alphabet);
    let itemExists = false;
    let AlphabetItem = {
      id: Alphabet.id,
      name: Alphabet.name,
      type: Alphabet.type,
    };
    if (!Alphabet.isChecked) {
      this.selectedAlphabets = this.selectedAlphabets.filter(
        (items: any) => items.id != Alphabet.id
      );
    }
    if (Alphabet.isChecked) {
      if (!this.selectedAlphabets.length) {
        this.selectedAlphabets.push(AlphabetItem);
      } else if (this.selectedAlphabets.length == 2) {
        Alphabet.isChecked = false;
        return;
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

      // if (this.vowels.length == 5) {
      //   this.onSumbit();
      // }
    }
  }
}
