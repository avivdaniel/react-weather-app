import React, { Component } from 'react';
import './Forecast1Day.css';
class Forecast1Day extends Component {
    setDayName(index) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        return days[index - 1].substr(0, 3);
    }
    render() {
        return (
            <li className="Forecast1Day col-3 shadow-sm" onClick={this.props.dayToDisplay.bind(this, this.props.day)}>
                <h3>{this.setDayName(this.props.day.day)}</h3>
                <img src={require(`../../../icons/${this.props.day.icon}.png`)} width={'50px'} alt="weatherImage" />
            </li >
        );
    }
}

export default Forecast1Day;