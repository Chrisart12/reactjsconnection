import React from 'react';
import { connect } from "react-redux"
import { fetchLogin } from "../../redux"
import  { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import config from './../../configuration/config';


class Login  extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
        }
        
        //Creation de ref pour mettre le focus au chargement de la page
        this.inputEmailRef = React.createRef()
    } 
    
    //Permet de placer le curseur au chargement de la page
    componentDidMount(){
        this.inputEmailRef.current.focus()

    }

    
    changeHandler = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        //On récupère les données de l'utilisateur
        let email = this.state.email
        let password = this.state.password
        // On envoie les données de connexion à l'action fetchLogin
        this.props.fetchLogin(email, password)
    }
        

render () {
    
    //On vérifie si l'entrée email est bien un email
    //On vérifie si l'entrée mot de passe est supérieur 2 caractères
    //avant d'activer le bouton de connexion
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {email, password } = this.state
    let btnDisabled;
    if(!regexEmail.test(email.toLowerCase()) || password.length < 3){
        btnDisabled = 'login-btn_disabled'
    } else {
        btnDisabled = ''
    }
    
    // const isconnected = this.props.userData.isconnected
    return !localStorage.getItem('userdata') ? (

        <div className="login-page-container">
            <div className="login-page">
                <div className="login-page_form">
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input ref={this.inputEmailRef} type="email" className="input-form" name="email"
                           
                                onChange={this.changeHandler}
                                placeholder="Email*" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="input-form" name="password"
                            onChange={this.changeHandler} placeholder="Mot de passe*" />
                        </div>
                        <button type="submit" className={`${btnDisabled} btn-form`}>CONNEXION</button>
                    </form>
                </div>
            </div>
    </div>
        ) : <Redirect to={'/'} />;
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
        fetchLogin: (email, password) => dispatch(fetchLogin(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);





