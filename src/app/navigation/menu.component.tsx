import React, { Component } from 'react';

import { BurgerIcon } from 'src/common/components/burger-icon/burger-icon.component';
import styles from './navigation.md.scss';

export class Navigation extends Component {
  override render(): React.ReactNode {
    return (
      <div className={styles.navigation}>
        <div className={styles.navigationLeftContainer}>
          <div className={styles.navigationLeftContainerBurger}>
            <BurgerIcon />
          </div>
          <div className={styles.navigationLeftContainerMode}>Standard</div>
          <div className={styles.navigationLeftContainerKeep}></div>
        </div>

        <div className={styles.navigationRightContainer}>
          <div className={styles.navigationRightContainerHistory}></div>
        </div>
      </div>
    );
  }
}
