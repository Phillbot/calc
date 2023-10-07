import React, { Component, ReactNode } from 'react';

import styles from './header.md.scss';

export class Header extends Component {
  override render(): ReactNode {
    return (
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <div className={styles.headerTitleIcon}></div>
          <div className={styles.headerTitleAppName}>Calculator</div>
        </div>
        <div className={styles.headerControls}>
          <div className={styles.headerControlsMinimize}>
            <div className={styles.headerControlsMinimizeIcon}></div>
          </div>
          <div className={styles.headerControlsMaximize}>
            <div className={styles.headerControlsMaximizeIcon}></div>
          </div>
          <div className={styles.headerControlsClose}></div>
        </div>
      </div>
    );
  }
}
