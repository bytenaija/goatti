import React from 'react';
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap'
import NavBar from './NavBar'
import bg from '../assets/images/bg.png'
import user from '../assets/images/user-icon.png'
import plus from '../assets/images/plus.png'
import operation from '../assets/images/operation.png'
import cart from '../assets/images/crt.png'
import earn from '../assets/images/earn.png'
import './content.css'

export default class How extends React.Component {
  render() {
    return (
        <div className="content-page-how" id="how">
            <h2>How It Works</h2>
      <div className="">
            <Row>
                <Col sm={12} md={4}>
                    <Row>
                      <Col sm={12} md={3}>
                        <img src={user} />
                      </Col>
                      <Col className='txt'>
                      <h4>
                      Create an Account
                        </h4>
                        <p>
                        Create account with correct details to create Livestock farm.
                          </p>
                      </Col>
                      </Row>

                      <Row >
                      <Col sm={12} md={3}>
                        <img src={plus} />
                      </Col>
                      <Col className='txt'>
                      <h4>
                      Create a Livestock Farm
                        </h4>
                        <p>
                        Create your livestock farm with your debit card to purchase desired number of goats from our plan.
                          </p>
                      </Col>
                      </Row>

                      <Row >
                      <Col sm={12} md={3}>
                        <img src={operation} />
                      </Col>
                      <Col className='txt'>
                      <h4>
                      Update on Farm Operation
                        </h4>
                        <p>
                        Our Technology gives you on-farm operation update daily, weekly and monthly on your livestock activities
                          </p>
                      </Col>
                      </Row>
                </Col>

                <Col sm={12} md={4} className="middle">
                <img src={bg} />
                </Col>

                <Col sm={12} md={4} style={{paddingLeft: '4rem'}}>
                <Row>
                      <Col sm={12} md={3}>
                        <img src={cart} />
                      </Col>
                      <Col >
                      <h4>
                      We sell
                        </h4>
                        <p>
                        We sell your livestock at maturity to our customers
                          </p>
                      </Col>
                      </Row>

                      <Row >
                      <Col sm={12}  md={3}>
                        <img src={earn} />
                      </Col>
                      <Col >
                      <h4>
                      You Earn
                        </h4>
                        <p>
                        We pay 30% in 6 months to your verified Nigerian Bank account.
                          </p>
                      </Col>
                      </Row>
                </Col>

           </Row>
      </div>

      </div>
    );
  }
}