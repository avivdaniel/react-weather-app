import React, { Component } from 'react';
import './DisplaySelectedDay.css'
import Forecast1Day from '../AllDaysList/Forecast1Day/Forecast1Day';

class DisplaySelectedDay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCelsius: true
        };
        this.changeCToF = this.changeCToF.bind(this);
        this.changeFToC = this.changeFToC.bind(this);
    }
    setDayName(index) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        return days[index - 1];
    }
    changeCToF() {
        this.setState({ isCelsius: false })
    }
    changeFToC() {
        this.setState({ isCelsius: true })

    }
    convertCToF(celsius) {
        let cTemp = celsius;
        let cToFahr = cTemp * 9 / 5 + 32;
        return Math.round(cToFahr * 100) / 100;
    }
    render() {
        return (
            <div className="DisplaySelectedDay row">
                <h2>{this.setDayName(this.props.day.day)}</h2>
                <span className='DisplaySelectedDay-temperature d-block'>
                    {this.state.isCelsius ? this.props.day.temperature : this.convertCToF(this.props.day.temperature)}
                    <span className="DisplaySelectedDay-degreeSignContainer">
                        <span className={this.state.isCelsius ? 'DisplaySelectedDay-SelectedDegree' : null} onClick={this.changeFToC}>&#8451;</span>
                        <span className={!this.state.isCelsius ? 'DisplaySelectedDay-SelectedDegree' : null} onClick={this.changeCToF}> &#8457;</span>
                    </span>
                </span>
                <p>{this.props.day.description}</p>
            </div>
        );
    }
}

export default DisplaySelectedDay;