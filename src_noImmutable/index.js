import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from './components/App'; // Container Component
import reducer from './reducers/reducers'; // reducer
import { getInitialTodos } from './actions/actions'; // init action

// store
const store = createStore(reducer);

// init action
store.dispatch(getInitialTodos());

// render
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
