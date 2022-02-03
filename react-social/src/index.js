import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import store from './redux/state';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        {...state} 
        addPost={store.addPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);