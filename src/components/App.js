import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
