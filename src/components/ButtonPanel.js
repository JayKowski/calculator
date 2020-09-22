import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

export default function ButtonPanel() {
  return (
    <div className="">
      <div className="group1">
        <Button name="AC" color="#CDCDCD" />
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
