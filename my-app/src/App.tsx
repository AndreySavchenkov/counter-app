import React from 'react';
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
