import React, { Component, ReactNode } from 'react';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import assertNever from 'src/common/utils/assert-never';

import styles from './keyboard.md.scss';
import { Key, KeyType, keys } from './keys';
import { KeyboardStore } from './keyboard.store';

@observer
export class Keyboard extends Component {
  @resolve
  private readonly _keyboardStore: KeyboardStore;

  override render(): ReactNode {
    return (
      <div className={styles.keyboard}>
        {keys.map(({ key, keyType }: Key) => (
          <div
            onClick={() => this._keyboardStore.addKey(key)}
            className={classNames(styles.keyboardKey, keyTypeToClassName(keyType))}
            key={key}
          >
            {key}
          </div>
        ))}
      </div>
    );
  }
}

function keyTypeToClassName(keyType: KeyType) {
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
