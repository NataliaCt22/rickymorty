import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';
import AllContent from './Containers/AllContent'

function App () {
  return (
    <div className="App">
      <Route path='/' exact component= {AllContent} />
    </div>
  );
}

export default App;
