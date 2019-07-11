import React from 'react';
import { Button} from 'reactstrap'
import './content.css'
import {withRouter} from 'react-router-dom'

class Join extends React.Component {
  render() {
    return (
      
          
      <article className="join" style={{background: this.props.background, marginTop: this.props.margin}}>
        <h4> {this.props.message} </h4>
        <Button onClick={() => this.props.history.push('/register')}>Start Now!</Button>{' '}
          </article>
   
    );
  }
}

export default  withRouter(Join)