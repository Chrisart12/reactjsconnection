import React, { Component } from 'react'
// import Proptypes from 'prop-types';

class Question extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            choice1: "c1",
            choice2: "c2",
            choice: "", 
            status: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            choice: e.target.value
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.question.response === this.state.choice){
            this.setState({
                status: "vrai"
            })
        } else {
            this.setState({
                status: "faux"
            })
        }
    }

    render() {
        const {choice1, choice2, choice, status} = this.state
        const {question} = this.props

        // let disabled = choice ? null : disabled
        let response;
        if(status === "vrai" ) {
            response = <div className="alert alert-success" role="alert">
                            Gagné !
                        </div>
        } else if (status === "faux") {
            response = <div className="alert alert-danger" role="alert">
                            Perdu ! <br />
                            La réponse est {question.response}
                        </div>
        }
       

        let btnStatus;
        if(choice) {
            btnStatus = null
        } else {
            btnStatus = "disabled"
        }

        return !question.title ? (
            <div></div>
        ) : (

            <div>
            <h1>{question.title}</h1>
            <h4>{question.badge}</h4>
            <div>{question.question} </div>
{response}
            <form onSubmit={this.handleSubmit} >
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="choice" id="choice1" value={choice1}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="choice1">
                        Choix: 1 {question.c1}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="choice" id="choice2" value={choice2} 
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="choice2">
                        Choix: 2 {question.c2}
                    </label>
                </div>
                <button className="btn btn-primary" disabled={btnStatus}>REPONSE</button>
            </form>
        </div>

        )
        
    }
}

// Question.propTypes = {
//     question: Proptypes.object,
// }

export default Question
