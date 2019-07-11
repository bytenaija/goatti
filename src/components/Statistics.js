import React from 'react';
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap'
import NavBar from './NavBar'
import body from '../assets/images/body.png'
import security from '../assets/images/security.png'
import balance from '../assets/images/balance.png'
import work from '../assets/images/work.png'
import cart from '../assets/images/cart.png'
import payment from '../assets/images/payment.png'
import './content.css'

export default class Statistics extends React.Component {
  render() {
    return (
        <Container className="content-page-stats">
            <Row>
                <Col>
                    <h4>1000+</h4>
                    <p>Acres of livestock farm</p>
                </Col>
                <Col>
                Over
                <h4>200</h4>
                    <p>Farms Created</p>
                </Col>
                <Col>
                Over
                <h4>350</h4>
                    <p>Livestocks</p>
                </Col>
                <Col>
                <h4>50+</h4>
                    <p>QSR companies in Nigeria</p>
                </Col>
                <Col>
                Over
                <h4>100</h4>
                    <p>Users</p>
                </Col>
                
                <Col>

                Over
                <h4>350</h4>
                    <p>Goats sold in  1 year of  operation</p>
                
                </Col>

            </Row>
            
      </Container>
    );
  }
}