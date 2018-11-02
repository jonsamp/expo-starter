import React from 'react';
import Sentry from 'sentry-expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './app/store/configureStore';
import AppContainer from './app/scenes/App';

const { store, persistor } = configureStore();

// Remove this once Sentry is correctly setup.
// Sentry.enableInExpoDevelopment = false;

// Sentry.config(
//   'https://a4180678b38b4ec291043df411778cf9:b8b411413ca44862830c97df282e67a6@sentry.io/1215689'
// ).install();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
