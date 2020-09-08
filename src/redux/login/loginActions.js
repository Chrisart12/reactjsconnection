import axios from 'axios';
import config from '../../configuration/config';
import history from '../../history';
import React from 'react';
import  { Redirect } from 'react-router-dom';

import {FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, DECONNECT_USER } from './loginTypes'


export const fetchLoginRequest = (bool) => {

    return {
        type: FETCH_LOGIN_REQUEST,
        payload: bool,
    }
}

export const fetchLoginSuccess = (user) => {

    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: user,
    }
}

export const fetchLoginFailure = (error) => {

    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error,
    }
}

export const deconnectUser = (bool) => {

    return {
        type: DECONNECT_USER,
        payload: bool,
    }
}


export const fetchLogin = (email, password) => {
    
    return (dispatch) => {

        dispatch(fetchLoginRequest(true))

        axios({
            method: 'post',
            url: config.API_URL + 'oauth/token',
            data: {
                "grant_type": config.GRANT_TYPE,
                "client_id": config.CLIENT_ID,
                "client_secret":  config.CLIENT_SECRET,
                "username": email,
                "password":password
            },
            headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json",
            }
        }).then(response => {
            //On stocke le token en session
            localStorage.setItem("token", response.data.access_token)
            axios({
                method: 'get',
                url: config.API_URL + 'api/user',
                headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json",
                "authorization": "Bearer " + response.data.access_token
                }
            }).then(response => {
            
                const user = {
                    lastname: response.data.lastname,
                    firstname: response.data.firstname,
                    id:        response.data.id,
                }
                    
                dispatch(fetchLoginSuccess(user))
                //On crée une session storage
                localStorage.setItem('userdata', JSON.stringify(response.data))
                
                }).then(() => {
                    history.push("/");
                    window.location.reload(false);
                    // return <Redirect to="/" />
                })
            
        }).catch( error => {
            const errorMsg = error.message
            dispatch(fetchLoginFailure(errorMsg))
            // notify()
        });
    
    }
}

