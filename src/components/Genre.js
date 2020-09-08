import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import config from './../configuration/config';

export class Genre extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
            genres: [],

        }
    }

    componentDidMount() {
    
        axios({
            method:'get',
            url: config.API_URL + 'api/genre',
        
            headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json",
                "authorization": "Bearer " + sessionStorage.getItem('token')
            }
        
        }).then(response => {
            console.log(response)

            this.setState({
                genres: response.data
        })
    

        }).catch( error => {
            const errorMsg = error.message
        });
        
    }

    render() {
        const { genres } = this.state;
        // console.log("this.props.params", this.props.match)

        return (
            <>
                {
                    genres.map((genre) => 
                        <li key={genre.id} className="nav-item">
                            <NavLink className="nav-link"  to={"/genre/" + genre.id} >{(genre.name).toUpperCase()}</NavLink>
                        </li>          
                    )
                }
            </>
        
        )
    }
}

export default Genre
