import React, { Component } from 'react';
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './homepage.css'
import Header from '../../../components/Header'
import Content from '../../../components/Content'
import Join from '../../../components/Join'
import Statistics from '../../../components/Statistics'
import How from '../../../components/How'
import Investments from '../../../components/Investments'
import Partners from '../../../components/Partners'
import Footer from '../../../components/Footer'

class HomePage extends Component {
  constructor(props){
    super(props);
  }

  scrollToHref = (element) =>{
    let node;


    if(element === 'how'){
      node = ReactDom.findDOMNode(this.refs.how);
      console.log(this.refs)
    }else  if(element === 'plans'){
      node = ReactDom.findDOMNode(this.refs.plans);
    }else  if(element === 'about'){
      node = ReactDom.findDOMNode(this.refs.about);
    }

    node.scrollIntoView({block: 'start', behavior: 'smooth'});

  }
  render() {
    return (
      <div className="homepage">
        <Header scrollToHref={this.scrollToHref}/>
        <Content ref="about" />

        <Join message = "Join the fastest growing community of Livestock Owners" background="#EBF7F4"/>
        <Statistics />


        <How ref="how"/>

        <Join message = "Build your Livestock Farm today! " margin="8rem"/>


        <Investments ref="plans"/>
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
