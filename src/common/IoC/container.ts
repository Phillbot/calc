import { Container, injectable } from 'inversify';
import { computed, makeAutoObservable, observable } from 'mobx';

import { DisplayStore } from '@app/display/display.store';
import { KeyboardStore } from '@app/keyboard/keyboard.store';

import { Symbols } from './symbols';

export const container = new Container({ defaultScope: 'Singleton' });

// without symbols

export interface IExample {
  value: string;
}

@injectable()
export class ExampleStore implements IExample {
  @observable
  private readonly _value = 'Hello ';
  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get value() {
    return this._value + 'World';
  }
}

@injectable()
export class ExampleStore2 implements IExample {
  @observable
  private readonly _value = 'Hello ';
  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get value() {
    return this._value + 'World 2';
  }
}

container.bind(DisplayStore).toSelf();
container.bind(KeyboardStore).toSelf();

// with symbols

container.bind<IExample>(Symbols.Example).to(ExampleStore);

// rebind
container.rebind<IExample>(Symbols.Example).to(ExampleStore2);

// get value from container with symbol
const a: IExample = container.get(Symbols.Example);

// get value from container with class
const b = container.get(DisplayStore);

/* eslint-disable no-console */
console.log(a.value);
console.log(b.currentValue);
