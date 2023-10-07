import { injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';

@injectable()
export class KeyboardStore {
  @observable
  private _keys: string[] = [];

  constructor() {
    makeObservable(this);
  }

  get keys(): string[] {
    return this._keys;
  }

  @action
  addKey(newKey: string): void {
    this._keys = [...this._keys, newKey];
  }
}
