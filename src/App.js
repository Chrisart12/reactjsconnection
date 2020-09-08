import React, { Component } from 'react';
import './App.scss';
import Title from './components/Title';
import Question from './components/Question';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Qcm from './components/Qcm';
import Genre from './components/Genre';
import Login from './components/auth/Login';
import { QcmByGenre } from './components/QcmByGenre';




export class App extends Component {
    render() {
        return (
            <div> 
                <Router>
                <Nav />
                    <Switch>
                            <Route path="/" exact component={ Home }/>
                            <Route path="/qcm" exact component={ Qcm }/>
                            <Route path="/genre/:id" exact component={ QcmByGenre }/>
                            <Route path="/login" exact component={ Login }/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
