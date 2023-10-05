import { injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { DisplayState } from './types';
import 'reflect-metadata';

@injectable()
export class DisplayStore {
  @observable
  private readonly _name = 'display';

  @observable
  private _state = DisplayState.EnterWords;

  constructor() {
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
}
