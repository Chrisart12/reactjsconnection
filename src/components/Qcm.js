import React, {Component} from 'react';
import axios from 'axios'
import Title from './Title';
import Question from './Question';
import config from './../configuration/config';
import  { Redirect } from 'react-router-dom';


class Qcm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            qcm: [],
            questions: []
        }
    }
    

    componentDidMount() {
        
    if(localStorage.getItem('userdata')) {

        axios({
            method:'get',
            url: config.API_URL + 'api/quiz',
        
            headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json",
                "authorization": "Bearer " + localStorage.getItem('token')
            }
        
        }).then(response => {
            console.log(response)

            this.setState({
                qcm: response.data,
                questions: response.data
        })
    

        }).catch( error => {
            const errorMsg = error.message
        });
        
    }

    }

render() {
    const { qcm, questions } = this.state
        return localStorage.getItem('userdata') ? (
            <div className="container">
                <Title qcm={qcm} />
            </div>
        ) : <Redirect to={'/login'} />;
    }
}

export default Qcm;
