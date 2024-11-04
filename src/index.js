import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // сначала подключаем Bootstrap
import './index.css'; // затем подключаем свои стили
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // "root" должен соответствовать id корневого элемента в вашем index.html
);