import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Forms from './Forms.js';
import logo from './logo.png';

ReactDOM.render(
  <div>
    <div style={{textAlign: "center"}}>
      <img src={logo} style={{paddingTop: '1rem', width: '5%'}}/>
      <h1>ISARVIT</h1>
      <p>Version 0.0.2 26/12/2020</p>
      <p>Automatic Medical Diagnosis Generator. Created by the École Centralle de Lille. <br /> Read the <a href="https://github.com/AndreisPurim/isarvit">Documentation</a> or explore the first <a href="https://colab.research.google.com/drive/1qffKY50XG0yTuh7z_9st8_2lQpMUYGA-?usp=sharing">prototype.</a></p>
    </div>
    <Forms />
  </div>
,document.getElementById('root'));