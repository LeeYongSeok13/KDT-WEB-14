import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './store';
import App2 from './App2';
import Practice from './Practice';
import {composeWithDevTools} from '@redux-devtools/extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store 정의 : 전역 상태를 관리하는 하나의 공간 (하나의 프로젝트에 하나만!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <App2 />
    <Practice/>
    </Provider>
  </React.StrictMode>
);