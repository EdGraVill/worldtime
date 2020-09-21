import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import { WorldTime } from './WorldTime';

const testView = () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
(globalThis as any).testView = testView;

export default WorldTime;
export * from './store'
export * from './Search';
export * from './WorldTime';
