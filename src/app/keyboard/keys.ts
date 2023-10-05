export type Key = {
  key: string;
  keyType: KeyType;
};

export type KeyType = 'action' | 'number' | 'separate' | 'equality' | 'change';

export const keys = [
  {
    key: '%',
    keyType: 'action',
  },
  {
    key: 'CE',
    keyType: 'action',
  },
  {
    key: 'C',
    keyType: 'action',
  },
  {
    key: '⌫',
    keyType: 'action',
  },
  {
    key: '1/x',
    keyType: 'action',
  },
  {
    key: 'x2',
    keyType: 'action',
  },
  {
    key: '2Vx',
    keyType: 'action',
  },
  {
    key: '÷',
    keyType: 'action',
  },
  {
    key: '7',
    keyType: 'number',
  },
  {
    key: '8',
    keyType: 'number',
  },
  {
    key: '9',
    keyType: 'number',
  },
  {
    key: '×',
    keyType: 'action',
  },
  {
    key: '4',
    keyType: 'number',
  },
  {
    key: '5',
    keyType: 'number',
  },
  {
    key: '6',
    keyType: 'number',
  },
  {
    key: '-',
    keyType: 'action',
  },
  {
    key: '1',
    keyType: 'number',
  },
  {
    key: '2',
    keyType: 'number',
  },
  {
    key: '3',
    keyType: 'number',
  },
  {
    key: '+',
    keyType: 'action',
  },
  {
    key: '+/-',
    keyType: 'change',
  },
  {
    key: '0',
    keyType: 'number',
  },
  {
    key: '.',
    keyType: 'separate',
  },
  {
    key: '=',
    keyType: 'equality',
  },
];
