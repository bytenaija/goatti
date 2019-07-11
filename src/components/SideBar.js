import React from 'react';
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom';
import './sidebar.css'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


export default class FAQs extends React.Component {
  render() {
    return (
      <nav className={this.props.shrink? "sidebar shrink" : "sidebar full"}>
      { this.props.shrink ?
        < div >
          <button className="btn btn-primary btn-side" onClick= {() => this.props.switch('create-farm')}><FontAwesomeIcon icon="vector-square" /> </button>
        </div>
          :
          <div>
          <div className="nav-piv">
         <FontAwesomeIcon icon="vector-square" size="2x" /> <button className="btn btn-primary btn-side" onClick= {() => this.props.switch('create-farm')}> Create Farm</button>
        </div>
        </div>
      }
      </nav>
    );
  }
}