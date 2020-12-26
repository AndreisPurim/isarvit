import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Forms from './Forms.js';

ReactDOM.render(
  <div>
    <div style={{textAlign: "center"}}>
      <h1>ISARVIT</h1>
      <p>Version 0.0.2 26/12/2020</p>
      <p>Automatic Medical Diagnosis Generator. Created by the École Centralle de Lille. <br /> Read the <a href="url">Documentation</a> or explore the first <a href="url">prototype.</a></p>
    </div>
    <Forms />
  </div>
,document.getElementById('root'));