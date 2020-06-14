import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Country from '../containers/CountryPageContainer';

import './App.scss';

function App() {

    return (
        <Router>
            <header className="header">
                <Navbar/>
            </header>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/country/:slug" component={Country}/>
            </Switch>
        </Router>
    );
}

export default App;