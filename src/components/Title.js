import React, { Component } from 'react'
// import Proptypes from 'prop-types';
import axios from 'axios'
import Question from './Question';

class Title extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // qcm: [],
            bgColor: "title__default",
            question: {},
        }
    }
    

    // componentDidMount() {
    //     axios.get("http://localhost:3000/data/mydata.json")
    //     .then(response => {
    //         console.log(response.data.qcm)
    //         this.setState({
    //             qcm: response.data.qcm
    //         })
    //     })
    // }

    handleOver = () => {
        this.setState({
            bgColor: "title__over"
        })
    }

    handleOut = () => {
        this.setState({
            bgColor: "title__out"
        })
    }

    handleClick = (myqcm) => {
        this.setState({
            question: myqcm
        })
    }



    render() {
        const { bgColor, question } = this.state
        const { qcm } = this.props

        const attr = {
            onMouseOver: this.handleOver,
            onMouseOut: this.handleOut, 
            // onClick:() => this.handleClick(myqcm) 
        }

        return (
            <div>
                <div className="title--container_flex" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div className="list-group">
                        <a href="#" className={ "list-group-item list-group-item-action active " } >
                            QCM JS React Angular
                        </a>
                        <ul className="list-group">
                            {
                                qcm.map((myqcm, index) =>  
                                    <li key={index} className={"list-group-item d-flex justify-content-between align-items-center " + bgColor}
                                        // onMouseOver={this.handleOver}
                                        // onMouseOut={this.handleOut} 
                                        {...attr}
                                        onClick={() => this.handleClick(myqcm)}   
                                    >
                                        {myqcm.title}
                                        <span className="badge badge-primary badge-pill">{myqcm.badge}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <Question question={question} />
                    </div>
                </div>
            </div>
        )
    }
}

// Title.propTypes = {
//     qcm: Proptypes.array,
// }

export default Title
