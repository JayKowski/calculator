import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // console.log(buttonName);
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
    console.log(this.state);
  }

  render() {
    const { next } = this.state;
    return (
      <div className="App">
        <Display result={next} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
