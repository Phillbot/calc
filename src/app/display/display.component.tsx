import React, { Component, ReactNode } from 'react';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';

import { DisplayStore } from './display.store';

import styles from './display.md.scss';

@observer
export class Display extends Component {
  @resolve
  private declare readonly _displayStore: DisplayStore;

  constructor(props: any) {
    super(props);
  }

  override render(): ReactNode {
    return (
      <div className={styles.display}>
        <div className={styles.displayActionValue}>205.56 +</div>
        <div className={styles.displayValue}>{this._displayStore.keys.map((k) => k)}</div>
      </div>
    );
  }
}
