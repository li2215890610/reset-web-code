import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import store from "./store";

/**
 * react-redux 
 * *** Provider 实质是一个组件,是一个提供器，是 react-redux 的一个核心API，连接着 store , Provider 里边所有的组件，都有能力获取到 store 里边的内容
 * *** 一个核心方法叫做 connect ,接收三个参数，最后一个参数是连接的组件，前面两个是连接的规则
 * 
 */


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
