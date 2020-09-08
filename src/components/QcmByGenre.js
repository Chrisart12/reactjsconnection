import React, { Component } from 'react';
import axios from 'axios';
import config from './../configuration/config';

export class QcmByGenre extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            qcm: [],
            questions: []
        }
    }


    componentDidMount() {
        console.log("pooooooppppppppppppppp", this.props.match.params.id)
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
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", response.data)

                //Filtrage de la data
                const newData = response.data.filter(elt => elt.genre_id == this.props.match.params.id);

                console.log("hpppppppppppppppppppppppph", newData)

                this.setState({
                    qcm: response.data,
                    questions: response.data
            })
        
    
            }).catch( error => {
                const errorMsg = error.message
            });
            
        }
    
        }

        shouldComponentUpdate(prevProps) {
            if (this.props.location.pathname != this.props.location.pathname) {
                // this.fetchData(this.props.userID);
                console.log("totototo je suis dans le compollllllllllllllllllllllllllllllllllllnent componentDidUpdate")
            }

            return true;
        }
        // componentDidUpdate(prevProps, prevState) {
            
        //     console.log("prevPropste", prevProps)
        //     console.log("totototote", this.props.match.params.id)
        //     console.log("t", this.props.location.pathname)
        //     if (this.props.location.pathname != this.props.location.pathname) {
        //         // this.fetchData(this.props.userID);
        //         console.log("totototo je suis dans le compollllllllllllllllllllllllllllllllllllnent componentDidUpdate")
        //     }
        // }
    


    
    render() {
    
        return (
            <div>
                oooooooo
            </div>
        )
    }
}

export default QcmByGenre
