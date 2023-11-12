import React, { Component, ReactNode } from 'react';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

import assertNever from '@common/utils/assert-never';

import { Key, KeyType, keys } from './keys';
import { KeyboardStore } from './keyboard.store';

import styles from './keyboard.md.scss';

@observer
export class Keyboard extends Component {
  @resolve
  private readonly _keyboardStore: KeyboardStore;

  private keyboardKeyOnClick({ value, type, state }: Key): void {
    if (state === 'available') {
      this._keyboardStore.addKey({ value, type });
    }
  }

  override render(): ReactNode {
    return (
      <div className={styles.keyboard}>
        {keys.map((key: Key) => (
          <div
            key={key.value}
            onClick={() => this.keyboardKeyOnClick(key)}
            className={classNames(
              styles.keyboardKey,
              keyTypeToClassName(key.type),
              {
                [styles.keyboardKeyInProgress]: key.state === 'in progress',
              }
            )}
          >
            {key.value}
          </div>
        ))}
      </div>
    );
  }
}

function keyTypeToClassName(keyType: KeyType): string {
  switch (keyType) {
    case 'action':
      return styles.keyboardKeyAction;
    case 'number':
      return styles.keyboardKeyNumber;
    case 'equality':
      return styles.keyboardKeyEquality;
    case 'separate':
      return styles.keyboardKeySeparate;
    case 'change':
      return styles.keyboardKeyChange;
    default:
      assertNever(keyType);
  }
}
