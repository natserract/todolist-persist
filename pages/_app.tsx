import Layout from '../containers/layout'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { initialTodoState } from '../store/reducers/todos';
import '../styles/globals.scss'
import { PersistGate } from 'redux-persist/integration/react';
import { initialUserState } from '../store/reducers/dataUser';

const initialState = {
  todos: initialTodoState,
  dataUser: initialUserState,
}

const store = configureStore(initialState);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={<div>Loading...</div>}>
        <Layout children={<Component {...pageProps} />} />
      </PersistGate>
    </Provider>
  )
}

export default App;