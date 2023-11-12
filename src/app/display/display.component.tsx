import React, { Component, ReactNode } from 'react';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';
import { IExample } from '@common/IoC/container';
import { Symbols } from '@common/IoC/symbols';
import { DisplayStore } from './display.store';

import styles from './display.md.scss';

@observer
export class Display extends Component {
  @resolve
  private declare readonly _displayStore: DisplayStore;
  @resolve(Symbols.Example)
  private declare readonly _exampleStore: IExample;
  override render(): ReactNode {
    return (
      <div className={styles.display}>
        <div className={styles.displayHistoryValue}>
          {this._displayStore.historyValue}
        </div>
        <div className={styles.displayValue}>
          {this._displayStore.currentValue}
        </div>
      </div>
    );
  }
}
