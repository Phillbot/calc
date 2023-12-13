import { inject, injectable } from 'inversify';
import { computed, makeObservable } from 'mobx';

import { KeyboardStore } from '../keyboard/keyboard.store';

@injectable()
export class DisplayStore {
  constructor(@inject(KeyboardStore) private _keyboardStore: KeyboardStore) {
    makeObservable(this);
  }

  get currentValue() {
    if (this._keyboardStore.resultValue) {
      return this._keyboardStore.resultValue;
    }

    if (this._keyboardStore.secondValue) {
      return this._keyboardStore.secondValue;
    }

    return this._keyboardStore.firstValue;
  }

  @computed
  get historyValue() {
    if (this._keyboardStore.currentActionKey) {
      const fistHalf =
        this._keyboardStore.memoResultValue || this._keyboardStore.firstValue;
      const secondHalf = this._keyboardStore.secondValue
        ? this._keyboardStore.secondValue
        : '';

      return (
        fistHalf + ' ' + this._keyboardStore.currentActionKey + ' ' + secondHalf
      );
    }

    return null;
  }
}
