import React from 'react';
import './App.css';
import AllDaysList from './components/AllDaysList/AllDaysList';
import DisplaySelectedDay from './components/DisplaySelectedDay/DisplaySelectedDay';

class App extends React.Component {

    render() {
        return (
            <div className="App container-fluid">
                < AllDaysList />
            </div>
        );
    }

}

export default App;
