import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //https://blog.csdn.net/wuyujin1997/article/details/139558616
  //这样写会 render 两次
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  //这样写会 render 1次
   <div>
    <App/>
   </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
