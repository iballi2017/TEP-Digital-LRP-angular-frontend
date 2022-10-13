export enum Place {
  HUNDRED = 'Hundred',
  TENS = 'Tens',
  UNIT = 'Unit',
}

export const actionNumbers = [
  {
    name: '6',
  },
  {
    name: '9',
  },
  {
    name: '1',
  },
  {
    name: '4',
  },
  {
    name: '5',
  },
  {
    name: '8',
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
          // hint: false,
          type: 'first number',
          isWellPlaced: false,
        },
        {
          figure: '3',
          // hint: false,
          type: 'second number',
          isWellPlaced: false,
        },
        {
          figure: '5',
          // hint: false,
          type: 'result number',
          isWellPlaced: false,
        },
      ],
    },
  ],
};
