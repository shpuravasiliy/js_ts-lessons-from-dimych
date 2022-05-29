import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sum} from './03/03';

// const sentense = 'Hello my friend!';
// const sentense2 = 'JS - the best   programming language.';
//
// console.log(splitIntoWords(sentense));
// console.log(splitIntoWords(sentense2));
//
// console.log(sum(3, 5));
// console.log(mult(3, 5));

console.log(sum(3, 5));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
