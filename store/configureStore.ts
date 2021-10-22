import { applyMiddleware, createStore, StoreCreator } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import { AppState, rootReducer } from './reducers/index';

export default function configureStore(initialState: AppState) {
  let store;
  const isServer = typeof window === 'undefined';

  if (isServer) {
    store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware()))
  } else {
    // Persist Configs
    // We need it only on client side
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage
    };

    store = createStore(persistReducer(persistConfig, rootReducer), initialState, composeWithDevTools(applyMiddleware()));
    store.__PERSISTOR = persistStore(store);
  }
  
  return store
}
