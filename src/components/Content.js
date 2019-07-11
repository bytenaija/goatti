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

export default class Header extends React.Component {
  render() {
    return (
        <Container className="content-page" id="about">
            <h2>Why Goatti?</h2>
      <Row className="Section">

          <Col>
            <Row>
            <Col sm={12}>
                <img src={security} />
                </Col>
                <Col>
                <h4>Tackling Food security in Nigeria</h4>
                <p>
                Without farm capacity and Innovation, Nigerians would be investing in Livestock for an affordable and available meat supply. We join force to tackle Food and meat insecurity in Nigeria.
                    </p>
                </Col>
            </Row>
            <Row>
            <Col sm={12}>
                <img src={balance} />
                </Col>
                <Col>
                <h4>Help invest in Livestock with Ease</h4>
                <p>
                With the Goatti App, any Nigerian can start their passion by investing in Livestock from their smartphone without any hassle.
                    </p>
                </Col>
            </Row>
          </Col>

          <Col>
          <img src={body} />
          </Col>

          <Col>
          <Row>
            <Col sm={12}>
                <img src={work} />
                </Col>
                <Col>
                <h4>Empowerment & Job Creation</h4>
                <p>
                By investing in Goatti Mobile App, you have not only invested by have created employment within the rural and urban regions of Nigeria.
                    </p>
                </Col>
            </Row>
            <Row>
            <Col sm={12}>
                <img src={cart} />
                </Col>
                <Col>
                <h4>Largest Retail Connect</h4>
                <p>
                We sell Livestock easily to a large pool of retailers.
                    </p>
                </Col>
            </Row>

            <Row>
            <Col sm={12}>
                <img src={payment} />
                </Col>
                <Col>
                <h4>Make Money</h4>
                <p>
                After sales, Users are guaranteed 30% ROI on there investment.

                    </p>
                </Col>
            </Row>
          </Col>

      </Row>

      </Container>
    );
  }
}