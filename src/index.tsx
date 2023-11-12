import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as DependencyInjectionProvider } from 'inversify-react';

import { container } from '@common/IoC/container';
import { Calc } from './app/calc-component';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DependencyInjectionProvider container={container}>
      <Calc />
    </DependencyInjectionProvider>
  </React.StrictMode>
);
