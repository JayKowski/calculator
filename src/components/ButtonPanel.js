import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

export default class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(btnName) {
        const { onClick } = this.props;
        onClick(btnName);
    }

    render() {
        return ( <
            div >
            <
            div className = "group1" >
            <
            Button name = "AC"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "+/-"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "%"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "/"
            onClick = { this.handleClick }
            /> <
            /div> <
            div className = "group2" >
            <
            Button name = "7"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "8"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "9"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "X"
            onClick = { this.handleClick }
            /> <
            /div> <
            div className = "group3" >
            <
            Button name = "4"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "5"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "6"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "-"
            onClick = { this.handleClick }
            /> <
            /div> <
            div className = "group4" >
            <
            Button name = "1"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "2"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "3"
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "+"
            onClick = { this.handleClick }
            /> <
            /div> <
            div className = "group5" >
            <
            Button name = "0"
            wide color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "."
            color = "#CDCDCD"
            onClick = { this.handleClick }
            /> <
            Button name = "="
            onClick = { this.handleClick }
            /> <
            /div> <
            /div>
        );
    }
}

ButtonPanel.propTypes = {
    onClick: PropTypes.func.isRequired,
};