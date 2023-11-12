import React, { PureComponent } from 'react';

import styles from './burger-icon.md.scss';

export class BurgerIcon extends PureComponent {
  override render(): React.ReactNode {
    return (
      <div className={styles.burger}>
        <div className={styles.burgerIcon}>
          <div className={styles.burgerIconElement} />
          <div className={styles.burgerIconElement} />
          <div className={styles.burgerIconElement} />
        </div>
      </div>
    );
  }
}
