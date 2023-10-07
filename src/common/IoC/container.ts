import { Container } from 'inversify';

import { DisplayStore } from 'src/app/display/display.store';
import { KeyboardStore } from 'src/app/keyboard/keyboard.store';

export const container = new Container({ defaultScope: 'Singleton' });

// without symbols

container.bind(DisplayStore).toSelf();
container.bind(KeyboardStore).toSelf();
