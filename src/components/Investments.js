import React from 'react';
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap'
import InvestmentCalc from './InvestmentCalc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

import './content.css'

export default class How extends React.Component {
  render() {
    return (
        <div className="content-page-investments">
            <h2>Our Farm Investment Plans</h2>
            <div className="">
                <Row>
                    <Col sm={12} md={8}>
                   <Row>
                    <Col>
                        <div className='inv-header basic'><h6>Basic</h6></div>
                        <div className="inv-content basic">
                            <Row>
                                <h4>1 - 5 Goats</h4>
                                <h6>(N50,000 - N250,OOO)</h6>
                            </Row>
                            <Row>
                                <Col md={9}>ROI 30%</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Free Account Opening</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Real time Notification on-farm Operation</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>1 Farm Labour</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Weekly Vaccinations</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Monthly Animal Health Care</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>6 Month Feeding</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Payout with 4-7 working days</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Sales within 6month</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Access to Farm update</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>12 hours response time</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Gifting Option</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>2X Farm Visit</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                        </div>
                        <div className='inv-footer basic'><Button tag= {Link} to="/dashboard/?type=basic" block>Start Now</Button>{' '} </div>
                    </Col>
                    <Col>
                        <div className='inv-header intermediate'><h6>Intermediate</h6></div>
                        <div className="inv-content intermediate">
                            <Row>
                                <h4>6 - 10 Goats</h4>
                                <h6>(N300,000 - N500,OOO)</h6>
                            </Row>
                            <Row>
                                <Col md={9}>ROI 30%</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Free Account Opening</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Real time Notification on-farm Operation</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>2 Farm Labour</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Weekly Vaccinations</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Monthly Animal Health Care</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>6 Month Feeding</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Payout with 4-7 working days</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Sales within 6month</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Access to Farm update</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>3 hours response time</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Gifting Option</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>4X Farm Visit</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                        </div>
                        <div className='inv-footer intermediate'><Button tag= {Link} to="/dashboard/?type=intermediate" block>Start Now</Button>{' '} </div>
                    </Col>
                    <Col>
                    <div className='inv-header standard'><h6>Standard</h6></div>
                    <div className="inv-content standard">
                            <Row>
                                <h4>11 - 20 Goats</h4>
                                <h6>(N550,000 - N1,000,OOO)</h6>
                            </Row>
                            <Row>
                                <Col md={9}>ROI 30%</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Free Account Opening</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Real time Notification on-farm Operation</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>5 Farm Labour</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Weekly Vaccinations</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Monthly Animal Health Care</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>6 Month Feeding</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Payout with 4-7 working days</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Sales within 6month</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Access to Farm update</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>3 hours response time</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>Gifting Option</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={9}>7X Farm Visit</Col>
                                <Col md={3}>
                                <FontAwesomeIcon icon="check" size="xs"/>
                                </Col>
                            </Row>

                        </div>
                        <div className='inv-footer standard'><Button tag= {Link} to="/dashboard/?type=standard" block>Start Now</Button>{' '} </div>
                    </Col>
                    </Row>
                    </Col>

                    <Col sm={12} md={4}>
                    <InvestmentCalc />
                    </Col>
                </Row>
            </div>

      </div>
    );
  }
}