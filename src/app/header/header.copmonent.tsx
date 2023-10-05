import React, { Component, ReactNode } from 'react';

import styles from './header.md.scss';

export class Header extends Component {
  override render(): ReactNode {
    return (
      <div className={styles.header}>
        <div className={styles['left-container']}>
          <div className={styles['left-container-icon']}></div>
          <div className={styles['left-container-title']}>Calculator</div>
        </div>
        <div className={styles.controls}>
          <div className={styles['controls-minimize']}>
            <div className={styles['controls-minimize-icon']}></div>
          </div>
          <div className={styles['controls-maximize']}>
            <div className={styles['controls-maximize-icon']}></div>
          </div>
          <div className={styles['controls-close']}></div>
        </div>
      </div>
    );
  }
}
