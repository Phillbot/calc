import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import assertNever from 'src/common/utils/assert-never';

import { HistoryElementState, historyElements } from './elements';
import styles from './history-panel.md.scss';

export class HistoryPanel extends Component {
  override render(): ReactNode {
    return (
      <div className={styles.historyPanel}>
        {historyElements.map(({ state, value, description }) => (
          <div
            key={value}
            className={classNames(styles.historyPanelElement, controlElementStateToClassName(state))}
            title={state === 'active' ? description : null}
          >
            {value}
          </div>
        ))}
      </div>
    );
  }
}

function controlElementStateToClassName(state: HistoryElementState) {
  switch (state) {
    case 'active':
      return styles.historyPanelElementActive;
    case 'inactive':
      return styles.historyPanelElementInactive;
    default:
      assertNever(state);
  }
}
