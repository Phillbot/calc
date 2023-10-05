import { Container } from 'inversify';

import { DisplayStore } from 'src/app/display/display.store';
import { Symbols } from './symbols';

export const container = new Container({ defaultScope: 'Singleton' });

// without symbols

container.bind(DisplayStore).toSelf();
