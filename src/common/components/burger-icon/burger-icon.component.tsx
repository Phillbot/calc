import React, { PureComponent } from 'react';

import styles from './burger-icon.md.scss';

export class BurgerIcon extends PureComponent {
  override render(): React.ReactNode {
    return (
      <div className={styles['burger-icon-wrapper']}>
        <div className={styles['burger-icon']}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
