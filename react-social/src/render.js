import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';

export const renderEntireTree = (state) => {
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