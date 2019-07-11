import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import '../HomePage/homepage.css'
import FAQHeader from '../../../components/FAQHeader'
import FAQs from '../../../components/FAQs'

import Footer from '../../../components/Footer'

class FAQ extends Component {
  render() {
    return (
      <div className="FAQ">
        <FAQHeader />
        <FAQs />
        
        <Footer />
      </div>
    );
  }
}

export default FAQ;
