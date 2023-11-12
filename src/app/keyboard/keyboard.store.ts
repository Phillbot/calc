import { injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';

import { Key } from './keys';

@injectable()
export class KeyboardStore {
  @observable
  private _keys: Omit<Key, 'state'>[] = [];

  @observable
  private _currentActionKey: string = null;

  @observable
  private _lastActionKey: string = null;

  @observable
  private _firstValue = '0';

  @observable
  private _secondValue: string = null;

  @observable
  private _resultValue: string = null;

  @observable
  private _memoResultValue: string = null;

  constructor() {
    makeObservable(this);
  }

  get keys(): Omit<Key, 'state'>[] {
    return this._keys;
  }

  get firstValue() {
    return this._firstValue;
  }

  get secondValue() {
    return this._secondValue;
  }

  get resultValue() {
    return this._resultValue;
  }

  get currentActionKey() {
    return this._currentActionKey;
  }

  get memoResultValue() {
    return this._memoResultValue;
  }

  @action
  private calcRes() {
    if (this._resultValue) {
      this._memoResultValue = this.resultValue;
      this._resultValue = eval(
        this._resultValue + this._currentActionKey + this._secondValue
      );
      return;
    }

    if (this._currentActionKey) {
      this._resultValue = eval(
        this._firstValue + this._currentActionKey + this._secondValue
      );

      this._lastActionKey = this._currentActionKey;

      return;
    }
  }

  @action
  private reset() {
    this._keys = [];
    this._currentActionKey = null;
    this._lastActionKey = null;
    this._firstValue = '0';
    this._secondValue = null;
    this._resultValue = null;
    this._memoResultValue = null;
  }

  @action
  addKey(newKey: Omit<Key, 'state'>): void {
    if (newKey.type === 'action') {
      if (newKey.value === 'C') {
        this.reset();
        return;
      }

      if (this._currentActionKey) {
        this.calcRes();
      }

      this._currentActionKey = newKey.value;

      return;
    }

    if (newKey.type === 'equality') {
      this.calcRes();
    }

    if (this._currentActionKey) {
      if (newKey.type === 'number') {
        if (this._secondValue === null || this._resultValue) {
          this._secondValue = newKey.value;
          return;
        }

        if (this._secondValue === '0') {
          if (newKey.value === '0') {
            return;
          }
          this._secondValue = newKey.value;
          return;
        }
        this._secondValue += newKey.value;
        return;
      }
    } else {
      if (newKey.type === 'number') {
        if (this._firstValue === '0') {
          if (newKey.value === '0') {
            return;
          }
          this._firstValue = newKey.value;
          return;
        }
        this._firstValue += newKey.value;
        return;
      }
    }
  }
}
