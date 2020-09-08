import React, { Component } from 'react';
import { connect } from "react-redux";
import { deconnectUser } from "../redux";
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Home } from './Home';
import Genre from './Genre';
import history from '../history'

export class Nav extends Component {
    constructor(props) {
        super(props)
    
        
    }
    
    //Fonction chargé de détruire la sessionStorage
    destroySessionStorage = () => {
        localStorage.clear();
    
    }

    //Fonction chargé de deconnecter l'utilisateur
    deconnect = () => {
        this.destroySessionStorage();
        this.props.deconnectUser(false);
        history.push("/login");
        window.location.reload(false);
    }

    render() {
        const { isConnected } = this.props.userData;
        console.log("isConnected", isConnected)
    

       let connectBtn = localStorage.getItem('userdata') ? 
        <li className="nav-item deconnected">
            <span className="nav-link" onClick={this.deconnect}>SE DECONNECTER</span> 
        </li> :
        <li className="nav-item">
            <NavLink className="nav-link" to='/login' >CONNEXION</NavLink>
        </li>  

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <Link to='/' className="navbar-brand" >QCM JS React Angular</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/'>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/qcm' >QCM</NavLink>
                        </li>
                        
                        <Genre />
                        { connectBtn }
                    </ul>
                </div>

        </nav>
                
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
        loading: state.user.loading,
        errorData: state.user.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deconnectUser: (bool) => dispatch(deconnectUser(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);




