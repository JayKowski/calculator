import React from 'react';
import Button from './Button';
import PropTypes from "prop-types";
import './ButtonPanel.css';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const name = e.target.value;
  }

  render() {
    return (
      <div>
        <div className="group1">
          <Button name="AC" color="#CDCDCD" onClick={ this.props.onClick } />
          <Button name="+/-" color="#CDCDCD" />
          <Button name="%" color="#CDCDCD" />
          <Button name="/" />
        </div>
        <div className="group2">
          <Button name="7" color="#CDCDCD" />
          <Button name="8" color="#CDCDCD" />
          <Button name="9" color="#CDCDCD" />
          <Button name="X" />
        </div>
        <div className="group3">
          <Button name="4" color="#CDCDCD" />
          <Button name="5" color="#CDCDCD" />
          <Button name="6" color="#CDCDCD" />
          <Button name="-" />
        </div>
        <div className="group4">
          <Button name="1" color="#CDCDCD" />
          <Button name="2" color="#CDCDCD" />
          <Button name="3" color="#CDCDCD" />
          <Button name="+" />
        </div>
        <div className="group5">
          <Button name="0" wide color="#CDCDCD" />
          <Button name="." color="#CDCDCD" />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
}