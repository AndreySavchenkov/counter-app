import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {
  return (
    <div>
      <Counter maxValue={10}/>
    </div>
  );
}

export default App;
