export type Key = {
  value: string;
  type: KeyType;
  state: KeyState;
};

export type KeyType = 'action' | 'number' | 'separate' | 'equality' | 'change';

export type KeyState = 'available' | 'in progress';

export const keys: Key[] = [
  {
    value: '%',
    type: 'action',
    state: 'available',
  },
  {
    value: 'CE',
    type: 'action',
    state: 'in progress',
  },
  {
    value: 'C',
    type: 'action',
    state: 'available',
  },
  {
    value: '⌫',
    type: 'action',
    state: 'available',
  },
  {
    value: '1/x',
    type: 'action',
    state: 'in progress',
  },
  {
    value: 'x2',
    type: 'action',
    state: 'in progress',
  },
  {
    value: '2Vx',
    type: 'action',
    state: 'in progress',
  },
  {
    value: '÷',
    type: 'action',
    state: 'available',
  },
  {
    value: '7',
    type: 'number',
    state: 'available',
  },
  {
    value: '8',
    type: 'number',
    state: 'available',
  },
  {
    value: '9',
    type: 'number',
    state: 'available',
  },
  {
    value: '×',
    type: 'action',
    state: 'available',
  },
  {
    value: '4',
    type: 'number',
    state: 'available',
  },
  {
    value: '5',
    type: 'number',
    state: 'available',
  },
  {
    value: '6',
    type: 'number',
    state: 'available',
  },
  {
    value: '-',
    type: 'action',
    state: 'available',
  },
  {
    value: '1',
    type: 'number',
    state: 'available',
  },
  {
    value: '2',
    type: 'number',
    state: 'available',
  },
  {
    value: '3',
    type: 'number',
    state: 'available',
  },
  {
    value: '+',
    type: 'action',
    state: 'available',
  },
  {
    value: '+/-',
    type: 'change',
    state: 'in progress',
  },
  {
    value: '0',
    type: 'number',
    state: 'available',
  },
  {
    value: '.',
    type: 'separate',
    state: 'in progress',
  },
  {
    value: '=',
    type: 'equality',
    state: 'available',
  },
];
