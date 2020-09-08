import React, {Component} from 'react';
import Proptypes from 'prop-types';
import logo from './logo.svg';
import './App.scss';

const Test = (props) => {
  return (
    <div>
      <h1>{props.str} </h1>
      <h1>{props.strOrnumber} </h1>
      {
        props.myArray.map(my =>
          <p>{my} </p>
        )
      }
    </div>
  )

}

Test.propTypes = {
  str:Proptypes.string,
  strOrnumber: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  myArray: Proptypes.array
}

class App extends Component {
 render() {
  return (
    <div className="container">
        <Test  str='issa'
          strOrnumber= {10}
          myArray= {["je", "suis", "un"]}
         />
    </div>
  )
 }
}

export default App;
