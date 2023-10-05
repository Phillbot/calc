import React, { Component } from 'react';

import { BurgerIcon } from 'src/common/components/burger-icon/burger-icon.component';
import styles from './navigation.md.scss';

export class Navigation extends Component {
  override render(): React.ReactNode {
    return (
      <div className={styles['navigation']}>
        <div className={styles['left-container']}>
          <div className={styles['left-container-burger']}>
            <BurgerIcon />
          </div>
          <div className={styles['left-container-mode']}>Standard</div>
          <div className={styles['left-container-keep']}></div>
        </div>

        <div className={styles['right-container']}>
          <div className={styles['right-container-history']}></div>
        </div>
      </div>
    );
  }
}
