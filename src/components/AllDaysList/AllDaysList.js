import React, { Component } from 'react';
import './AllDaysList.css'
import Forecast1Day from './Forecast1Day/Forecast1Day';
import DisplaySelectedDay from '../DisplaySelectedDay/DisplaySelectedDay';
const wheatherAPI = 'https://my-json-server.typicode.com/evyros/react-weather-app/forecast';


class AllDaysList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            dayToDisplay: {}
        };
        this.dayToDisplay = this.dayToDisplay.bind(this);
    }
    dayToDisplay(day) {
        this.setState({ dayToDisplay: day })
    }
    async componentDidMount() {
        try {
            const response = await fetch(wheatherAPI);
            if (!response.ok) {
                throw new Error('Request faild');
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            this.setState({
                days: jsonResponse,
                dayToDisplay: jsonResponse[0]
            }, () => {
                console.log(this.state.days);
            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className='AllDaysList'>
                <DisplaySelectedDay day={this.state.dayToDisplay} />
                <ul className='AllDaysList-ul p-0 row justify-content-around'>
                    {this.state.days.map((day, index) => {
                        return <Forecast1Day
                            key={index}
                            day={day}
                            dayToDisplay={this.dayToDisplay}
                        />
                    })}
                </ul>
            </div>

        );
    }
}

export default AllDaysList;