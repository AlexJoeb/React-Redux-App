import React from 'react';

// ! Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MainReducer from './redux/reducers/MainReducer';

// ! Components
import Form from './components/Form';

const store = createStore(
  MainReducer,
  applyMiddleware(thunk, logger)
);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
