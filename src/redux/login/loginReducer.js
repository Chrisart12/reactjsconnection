import {FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, DECONNECT_USER } from './loginTypes'

const initialState = {
    loading: false,
    isConnected: false,
    user: {},
    error: ""
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading: action.payload
            }
            break;
        
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isConnected: true,
                user: action.payload,
                error: ""
            }
            break;

        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isConnected: false,
                user: {},
                error: action.payload,
            }
            break;

        case DECONNECT_USER:
            return {
                ...state,
                user: {},
                isconnected: action.payload
            }
    
        default:
            return state;
            break;
    }

}

export default loginReducer;