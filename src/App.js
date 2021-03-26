import React,{useState} from 'react'
import './App.css';

import Counter from './components/Counter'
import Greeting from './Greeting'

function App() {
  
  return (
    <div className="container">
      
      <Greeting>
        <h1 className="greeting">გამარჯობა</h1>
        <p className="description">ეს ვებსაიტი გაშვებულია სატესტო რეჟიმში</p>
      </Greeting>
      <Counter /> 
      <br />

    </div>
  );
}

export default App;
