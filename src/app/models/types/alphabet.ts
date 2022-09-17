export interface Alphabet {
    id: number;
    name: string;
    isChecked: boolean;
    type: string;
}



export enum AlphabetType {
    VOWEL = 'VOWEL',
    CONSONANT = 'CONSONANT',
  }