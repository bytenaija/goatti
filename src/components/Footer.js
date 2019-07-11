import React from 'react';
import {
    Row, 
    Col,
    Button,
    NavLink,
    Input
   } from 'reactstrap';
import {NavLink as RRNavLink, withRouter} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import mail from '../assets/images/mail.png'
import mobile from '../assets/images/mobile.png'
import office from '../assets/images/office.png'
import fb from '../assets/images/fb.png'
import tw from '../assets/images/tw.png'
import ig from '../assets/images/ig.png'
import wa from '../assets/images/wa.png'
import appstore from '../assets/images/appstore.png'
import playstore from '../assets/images/playstore.png'

import './content.css'


class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
       
            <Row>
              <Col sm={12} md={2}>
                    <img src={logo} alt="logo" />
                    <NavLink tag={RRNavLink} exact to="/about">About Us</NavLink>
                    <NavLink tag={RRNavLink} exact to="/about">In the News</NavLink>
                    <NavLink tag={RRNavLink} exact to="/faqs">FAQ</NavLink>
                    <NavLink tag={RRNavLink} exact to="/about">Blog</NavLink>
              </Col >


              <Col  sm={12}  className="second" md={4}>

             <h4>Contact Us</h4>
                    <Row>
                        <Col  sm={12}   md={1}> <img src={mail} alt="logo" className="icon"/></Col>
                        
                        <Col>hello@goatti.ng <br />
                        support@goatti.ng</Col>
                    </Row>
                    <p><hr /></p>
                    <Row>
                        <Col   sm={12}  md={1}> <img src={mobile} alt="logo" className="icon"/></Col>
                        
                        <Col>+2348069696778

                                <br />
                            +2349061108306</Col>
                    </Row>

                    <p><hr /></p>
                    <Row>
                        <Col  sm={12}   md={1}> <img src={office} alt="logo" className="icon"/></Col>
                        
                        <Col>167, Afriland House, Egbeda - Idimu Road, Egbeda, Lagos.

                                <br />
                                5/7, Funmi Alaka street, Off Lasu - Igando Expressway,  Igando,  Lagos</Col>
                    </Row>
              </Col>


              <Col  sm={12}  md={3} className="second">
              <h4>Legal</h4>
              <NavLink tag={RRNavLink} exact to="/about">Terms &amp; Conditions</NavLink>
                    <NavLink tag={RRNavLink} exact to="/privacy">Privacy Policy</NavLink>
                    <NavLink tag={RRNavLink} exact to="/about">Terms of Use</NavLink>
                    
              </Col>


              <Col  sm={12}  md={3} className="second">
              <h5>Subscribe to our newsletters</h5>
              <p></p>
              <Input type="text" />
              <Button>Subscribe</Button>{' '}
              <Row className="social-media" >
                <Col  xs={3} ><img src={fb} alt="logo" className="socials"/></Col>
                <Col  xs={3} ><img src={tw} alt="logo" className="socials"/></Col>
                <Col xs={3}><img src={ig} alt="logo" className="socials"/></Col>
                <Col xs={3}><img src={wa} alt="logo" className="socials"/></Col>
              </Row>
            <p>&nbsp;</p>
              <h5>Download our App</h5>
              <Row className="apps">
              <Col  xs={6} ><img src={appstore} alt="logo" /></Col>
              <Col  xs={6} ><img src={playstore} alt="logo" /></Col>
              </Row>
              </Col>
            </Row>
            <Row className="copy">
                <hr />
              
                    <Col md={6}>Copyright  &copy;  GOATTI NIGERIA. All right reserved </Col>
                    <Col md={6} className='right'> A subsidiary product of Remnikes Agricultural Limited</Col>
                   
              
            </Row>
            
      </div>
    );
  }
}


export default withRouter(Footer)