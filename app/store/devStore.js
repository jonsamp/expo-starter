import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../state/reducers';
import rootSaga from '../state/sagas';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

// Root store
export default function configureStore() {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../state/reducers', () => {
      const nextRootReducer = require('../state/reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
