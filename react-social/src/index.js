import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import store from './redux/redux-store';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        {...state}
        dispatch={store.dispatch.bind(store)} 
        store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  renderEntireTree(state);
});