import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import assertNever from 'src/common/utils/assert-never';

import styles from './control-panel.md.scss';
import { ControlElementState, controlElements } from './elements';

export class ControlPanel extends Component {
  override render(): ReactNode {
    return (
      <div className={styles['control-panel']}>
        {controlElements.map(({ state, value, description }) => (
          <div
            className={classNames(styles['control-panel-element'], controlElementStateToClassName(state))}
            title={state === 'active' ? description : null}
          >
            {value}
          </div>
        ))}
      </div>
    );
  }
}

function controlElementStateToClassName(state: ControlElementState) {
  switch (state) {
    case 'active':
      return styles['control-panel-element_active'];
    case 'inactive':
      return styles['control-panel-element_inactive'];
    default:
      assertNever(state);
  }
}
