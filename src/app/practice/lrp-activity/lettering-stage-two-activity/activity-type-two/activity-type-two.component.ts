import { Component, OnInit } from '@angular/core';
import { Alphabet, AlphabetType, LrpLetteringActivityService } from '../../services/lrp-lettering-activity.service';

@Component({
  selector: 'app-activity-type-two',
  templateUrl: './activity-type-two.component.html',
  styleUrls: ['./activity-type-two.component.scss']
})
export class ActivityTypeTwoComponent implements OnInit {
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
  }

  onChecked() {}

  onSelected(Alphabet: any) {
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
          // 
          if (item?.id == Alphabet?.id) {
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
