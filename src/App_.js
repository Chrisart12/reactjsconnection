import React, {Component} from 'react';
import axios from 'axios'
import './App.scss';
import Title from './components/Title';
import Question from './components/Question';
import { Router, Switch, Route } from 'react-router-dom';
// import Qcm from './components/Qcm';
// import Home from './components/Home';
import Nav from './components/Nav';



class App extends Component {

render() {
    return(
        <div>
        {/* <Nav /> */}
        <Router>
                <Switch>
                    {/* <Route path="/" exact component={ Home }/>
                    <Route path="/qcm" exact component={ Qcm }/> */}
                </Switch>
            </Router>
        </div>
    )
}
}

export default App;
