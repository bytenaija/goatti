import React from 'react';
import {Input, Button, Row, Col} from 'reactstrap'

import logo from '../assets/images/logo.png'


import './content.css'

export default class InvestmentCalc extends React.Component {
    state = {
        numberOfGoats: 0,
        investmentValue: 0,
        ROI: 0,
        totalEarnings: 0,
        price: 50000,
        roiPercent: 0.30
    }

    calculateInvestment = (numberOfGoats) =>{
        let investmentValue = numberOfGoats * this.state.price;
        let ROI = investmentValue * this.state.roiPercent;
        let totalEarnings = investmentValue + ROI;
        this.setState({...this.state, numberOfGoats, investmentValue, ROI, totalEarnings});
    }
  render() {
    return (
        <div className="investment-calc">
         <Row>
             <Col md={8}><h4>Investment Calculator</h4></Col>
             <Col><img src={logo} alt="logo"/></Col>
         </Row>

         <Row>
             <Col md={7}>Numbers of Goat</Col>
                <Col><Input onChange={(e) => this.calculateInvestment(e.target.value)}/></Col> 
         </Row>

         <Row>
             <Col md={12}>Investment Value</Col>
                <Input readOnly value={this.state.investmentValue.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}/>
         </Row>

         <Row>
             <Col md={12}>ROI (30%)</Col>
                <Input readOnly value={this.state.ROI.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}/>
         </Row>

         <Row>
             <Col md={12}>Total Earning</Col>
                <Input readOnly value={this.state.totalEarnings.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}/>
         </Row>
      </div>
    );
  }
}