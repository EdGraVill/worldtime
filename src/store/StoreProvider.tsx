import * as React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './setupStore';

const StoreProvider: React.FC = ({ children }) => {
  const store = React.useMemo(setupStore, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
