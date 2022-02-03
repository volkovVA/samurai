import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import state, {subscribe} from './redux/state';
import {addPost, updateNewPostText} from './redux/state';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        {...state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(state);

subscribe(renderEntireTree);