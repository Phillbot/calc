import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import 'reflect-metadata';
import { KeyboardStore } from '../keyboard/keyboard.store';
import { DisplayState } from './types';

@injectable()
export class DisplayStore {
  @observable
  private readonly _name = 'display';

  @observable
  private _state = DisplayState.EnterWords;

  constructor(@inject(KeyboardStore) private _keyboardStore: KeyboardStore) {
    makeObservable(this);
  }

  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }

  @action
  setState(state: DisplayState): void {
    this._state = state;
  }

  get keys() {
    return this._keyboardStore.keys;
  }
}
