


export enum Place{
  HUNDRED = 'Hundred',
  TENS = 'Tens',
  UNIT = 'Unit',
}


export const actionNumbers = [
  {
    name: 'Hundred',
    index: 0
  },
  {
    name: 'Tens',
    index: 1
  },
  {
    name: 'Unit',
    index: 2
  },
];

export const resultNumbers = {
  isComplete: false,
  numbers: [
    {
      isDone: false,
      list: [
        {
          figure: '2',
          hint: false,
          isWellPlaced: false,
          place: Place.UNIT
        },
      ],
    },
    {
      isDone: false,
      list: [
        {
          figure: '6',
          hint: false,
          isWellPlaced: false,
          place: Place.HUNDRED
        },
        {
          figure: '3',
          hint: false,
          isWellPlaced: false,
          place: Place.TENS
        },
        {
          figure: '4',
          hint: false,
          isWellPlaced: false,
          place: Place.UNIT
        },
      ],
    },
    {
      isDone: false,
      list: [
        {
          figure: '2',
          hint: false,
          isWellPlaced: false,
          place: Place.TENS
        },
        {
          figure: '2',
          hint: false,
          isWellPlaced: false,
          place: Place.UNIT
        },
      ],
    },
  ],
};