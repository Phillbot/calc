import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import assertNever from 'src/common/utils/assert-never';

import styles from './keyboard.md.scss';
import { Key, KeyType, keys } from './keys';

export class Keyboard extends Component {
  override render(): ReactNode {
    return (
      <div className={styles.keyboard}>
        {keys.map(({ key, keyType }: Key) => (
          <div className={classNames(styles['keyboard-key'], keyTypeToClassName(keyType))} key={key}>
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
      return styles['keyboard-key_action'];
    case 'number':
      return styles['keyboard-key_number'];
    case 'equality':
      return styles['keyboard-key_equality'];
    case 'separate':
      return styles['keyboard-key_separate'];
    case 'change':
      return styles['keyboard-key_change'];
    default:
      assertNever(keyType);
  }
}
