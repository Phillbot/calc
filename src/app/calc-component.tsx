import React, { Component } from 'react';

import { Header } from './header/header.copmonent';
import { Navigation } from './navigation/menu.component';
import { Display } from './display/display.component';
import { ControlPanel } from './conotrol-panel/control-panel.component';
import { Keyboard } from './keyboard/keyboard.component';

import styles from './calc.md.scss';

export class Calc extends Component {
  override render(): React.ReactNode {
    return (
      <div className={styles.calc}>
        <Header />
        <Navigation />
        <Display />
        <ControlPanel />
        <Keyboard />
      </div>
    );
  }
}
