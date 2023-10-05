export type ControlElement = {
  value: string;
  description: string;
  state: ControlElementState;
};

export type ControlElementState = 'active' | 'inactive';

export const controlElements: ControlElement[] = [
  {
    value: 'MC',
    description: 'Clear all memory (Ctrl+L)',
    state: 'inactive',
  },
  {
    value: 'MR',
    description: 'Memory recall (Ctrl+R)',
    state: 'inactive',
  },
  {
    value: 'M+',
    description: 'Memory add (Ctrl+P)',
    state: 'active',
  },
  {
    value: 'M-',
    description: 'Memory subtract (Ctrl+Q)',
    state: 'active',
  },
  {
    value: 'MS',
    description: 'Memory store (Ctrl+M)',
    state: 'active',
  },
  {
    value: 'M^',
    description: 'Memory',
    state: 'inactive',
  },
];
