import React from 'react';
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap'
import NavBar from './NavBar'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'
import paystack from '../assets/images/paystack.png'
import naic from '../assets/images/naic.png'
import funaab from '../assets/images/funaab.png'
import kobo from '../assets/images/kobo.png'
import verve from '../assets/images/verve.png'
import './content.css'

export default class Partners extends React.Component {
  render() {
    return (
        <div className="content-page-partners">
        <h4>Our Strategic Partners</h4>
            <Row>
                <Col>
                    <img src={visa} alt="" />
                </Col>
                <Col>
                <img src={mastercard} alt="" />
                </Col>
                <Col>
                <img src={verve} alt="" />
                </Col>
                <Col>
                <img src={kobo} alt="" />
                </Col>
                <Col>
                <img src={naic} alt="" />
                </Col>
                
                <Col>

                <img src={funaab} alt="" />
                
                </Col>


                <Col>

                    <img src={paystack} alt="" />

                </Col>
            </Row>
            
      </div>
    );
  }
}