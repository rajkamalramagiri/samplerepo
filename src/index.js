import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Example from './Example';
import ListComponent from './Examp';
import Navbar from './Navbar';
import Parent from './Parent';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Example/> */}
    {/* <ListComponent /> */}
    {/* <Navbar /> */}
    <Parent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
