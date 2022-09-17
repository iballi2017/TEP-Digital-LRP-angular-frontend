import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alphabet, AlphabetType } from 'src/app/models/types/alphabet';
import { StageThreeActivityExerciseTwoService } from 'src/app/services/stage-three-activity-exercise-two.service';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss'],
})
export class ExerciseTwoComponent implements OnInit, DoCheck {
  alphabets!: Alphabet[];
  consonants!: Alphabet[];
  consonant = AlphabetType.CONSONANT;
  inputDate: any[] = [];
  selectedAlphabets: any[] = [];
  exerciseAlphabets: any[] = [];
  resultFourLetterWords: any[] = [];

  audioFile =
    '../../../../../../../../assets/audio/mixkit-audience-light-applause-354.mp3';

  constructor(
    private _stageThreeActivityExerciseTwoSvc: StageThreeActivityExerciseTwoService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.GetResultFourLetterWords();
    this.getActionLetters();
  }
  ngDoCheck(): void {
    // console.log('Something Happpend!!!');
    // console.log('selectedAlphabets: ', this.selectedAlphabets);
    this.onTestValues();
  }

  GetResultFourLetterWords() {
    this.resultFourLetterWords =
      this._stageThreeActivityExerciseTwoSvc.GetresultFourLetterWords();
    // console.log(' this.resultFourLetterWords: ', this.resultFourLetterWords);
  }

  getActionLetters() {
    this.exerciseAlphabets =
      this._stageThreeActivityExerciseTwoSvc.GetActionAlphabets();
  }

  onPush(LetterItem: any) {
    console.log('LetterItem: ', LetterItem);
    let itemExists = false;
    let LetterItemItem = {
      id: LetterItem.id,
      name: LetterItem.name,
      type: LetterItem.type,
      isWellPlaced: LetterItem.isWellPlaced,
    };

    if (this.selectedAlphabets.length) {
      let isItemExist = this.selectedAlphabets.includes(LetterItem);
      if (isItemExist) {
        let x = [...this.selectedAlphabets];
        this.selectedAlphabets = x.filter(
          (item: any) => item.name != LetterItem.name
        );
      } else {
        if (this.selectedAlphabets.length > 1) {
          alert('Filled!!!');
          return;
        }
        this.selectedAlphabets.push(LetterItem);
      }
    } else {
      if (this.selectedAlphabets.length > 1) {
        alert('Filled!!!');
        return;
      }
      this.selectedAlphabets.push(LetterItem);
    }
  }

  onTestValues() {
    for (let i in this.resultFourLetterWords) {
      // console.log('i: ', this.resultFourLetterWords[i].word);
      // console.log('i: ', this.selectedAlphabets);
      if (
        this.resultFourLetterWords[i].word[0]?.name ==
        this.selectedAlphabets[0]?.name
      ) {
        // console.log('true: ', this.resultFourLetterWords[i]);
        this.selectedAlphabets[0].isWellPlaced = true;
      }

      if (this.selectedAlphabets.length != 0) {
        if (
          this.resultFourLetterWords[i].word[0]?.name !=
          this.selectedAlphabets[0]?.name
        ) {
          // console.log('bad: ', this.resultFourLetterWords[i]);
        }
      }
      if (
        this.resultFourLetterWords[i].word[1]?.name ==
        this.selectedAlphabets[1]?.name
      ) {
        this.resultFourLetterWords[i].isWellPlaced = true;
      }
      if (
        this.resultFourLetterWords[i].word[0]?.name ==
          this.selectedAlphabets[0]?.name &&
        this.resultFourLetterWords[i].word[1]?.name ==
          this.selectedAlphabets[1]?.name
      ) {
        console.log('YES!!!');
        this.resultFourLetterWords[i].isDone = true;
        this.selectedAlphabets = [];
      } else {
        console.log('NO!!!');
      }
    }
    this.onComplete();
  }

  onComplete() {
    let complete = this.resultFourLetterWords.filter(
      (done: any) => done?.isDone == true
    );
    // console.log('complete: ', complete);
    if (complete.length == 2) {
      // alert('Congratulations!!!');
      this.onPlayApplause();
      // this._router.navigate([
      //   '/literacy/lettering/stage-3/activity/exercise-two',
      // ]);
    }
  }

  onPlayApplause() {
    console.log('click');
    let audio = new Audio();
    audio.src = this.audioFile;
    audio.load();
    audio.play();
  }
}
