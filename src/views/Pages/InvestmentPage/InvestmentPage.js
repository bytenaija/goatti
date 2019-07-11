import React, { Component } from 'react';
 import queryString from 'query-string';
 import {connect} from 'react-redux'
import * as actions from '../../../actions'
import PaymentPage from '../PaymentPage'
import SweetAlert from 'sweetalert2-react';
import './investment.css'
import NavBar from '../../../components/InnerNavBar'
import {Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';

import SideBar from '../../../components/SideBar'

    class InvestmentPage extends Component {

    	state = {
        type: 'basic',

        estimatedPrice: 0,
        basic: {
          min: 1,
          max: 5
        },
        intermediate: {
          min: 6,
          max: 10
        },
        standard: {
          min: 11,
          max: 20
        },
        cost: 50000,
        profit: 30,
        sidenav: true,
        investmentNumber: 0,
        modals: {
          createFarm: false,
          shopProducts: false,
          viewTransactions: false,
          farmUpdates: false,

        }
    	}

    	result = (response) => {
        this.setState({error: false});
    	if(response.status == 'success'){
        this.props.payForFarm({reference: this.props.farm.reference, amount: this.state.estimatedPrice, farm: true})
      }else{
        this.setState({error: true, message: "An error occured. Please try again."})
      }
    	}

    	close = () => {
    	this.setState({error: true, message: 'Payment not successful'})
    	}


    toggle = () =>{
        let modals = {
           createFarm: false,
           shopProducts: false,
           viewTransactions: false,
           farmUpdates: false,

         }
        this.setState({modals})
    }

       componentDidMount() {
         if(this.props.user.token == null){
           this.props.updateUser();
         }

        const parsed = queryString.parse(this.props.location.search);
        const {type} = parsed;
        if(type){
           let modals = {
             createFarm: true,
             shopProducts: false,
             viewTransactions: false,
             farmUpdates: false,

           }
        this.setState({type, modals});
          }
       }


        changeInvestmentNumber = async (number) =>{

        let converToNumber = 0
        let estimatedPrice = 0
        if(number != ''){

          let {max, min} = this.state[this.state.type]

            converToNumber = parseInt(number)
            if (converToNumber < min || converToNumber > max ) {
                this.setState({error: true, message: `You can only purchase between ${min} and ${max} goats under the ${this.state.type} farm plan` })

            }
            this.setState({error: false});
           if(converToNumber > 20){
               this.setState({
                 error: true,
                 message: `You cannot purchase more than 20 goats in one transaction`
               })
               return;
           }
            estimatedPrice = this.state.cost * converToNumber;
            this.setState({...this.state, estimatedPrice, investmentNumber: converToNumber}, async ()=>  {
                if(this.props.farm._id){
                    await this.props.createFarm(converToNumber, this.state.profit, estimatedPrice, this.props.farm._id)
                }else{
                    await this.props.createFarm(converToNumber, this.state.profit, estimatedPrice)
                }
            })


        }else{
            this.setState({...this.state, estimatedPrice: 0, investmentNumber: 0}, async ()=> {
                if(this.props.farm._id){
                    await this.props.createFarm(converToNumber, this.state.profit, estimatedPrice, this.props.farm._id)
                }else{
                    await this.props.createFarm(converToNumber, this.state.profit, estimatedPrice)
                }
            })
        }

    }

    sideNav = () =>{
      this.setState({sidenav: !this.state.sidenav})
    }

    switchPage = (page) =>{
      switch(page){
        case 'create-farm':
         let modals = {
           createFarm: true,
           shopProducts: false,
           viewTransactions: false,
           farmUpdates: false,

         }
        this.setState({modals})
        break;
        default:
          modals = {
            createFarm: false,
            shopProducts: false,
            viewTransactions: false,
            farmUpdates: false,

          }
          this.setState({modals})

      }
    }
      render() {
        return (
          <div className="app">
          <NavBar sidenav={this.sideNav} />
            <SweetAlert
              show={this.state.error}
              title="Create React Farm"
              text={this.state.message}
              onConfirm={() => this.setState({ error: false })}
            />
            <div>
            {
              this.state.sidenav ?
              <div  className="create-farm" >
              < div className ="side full" >
              <SideBar switch= {this.switchPage }/>
              </div>
               <div className="farm-body full">

              </div>
              </div>
              :
              < div className = "create-farm" >
               < div className = "side shrink">
              < SideBar shrink switch= {this.switchPage }/>
              </div>

               <div className="farm-body shrink">

              </div>
              </div>
            }

            </div>
            <Modal isOpen={this.state.modals.createFarm} toggle={this.toggle} >
               < ModalBody >
              <div className="farm-header">
                <div>Invest in Livestock
                <h3>Make Money &</h3>
                <h4>Impact Life.</h4>
                </div>
              </div>
              <div className="farm" >
                <label>Number of units</label>
                <input type="number" className="form-control" onChange={(e) => this.changeInvestmentNumber(e.target.value)} value={this.state.investmentNumber.toString()}/>
                <label> Unit Price: 50, 000.00 </label>
                <p></p>
                < h4 className = "estimatedPrice" > &#8358; {this.state.estimatedPrice.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</h4>
              </div>
               </ModalBody>
               <ModalFooter>
                 {this.state.estimatedPrice > 0 && this.state.investmentNumber >= this.state[this.state.type].min?
            <PaymentPage email={this.props.user.email} result={this.result} amount={this.state.estimatedPrice * 100} reference={this.props.farm.reference}/>
            : ''
            }
             <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                 </ModalFooter>
               </Modal>

            </div>
        );
      }
    }

    const mapStateToProps= ({investments, farm, auth}) =>{

    return {farm: farm.farm,
      user: auth.user,
    //   error: payment.error, errorMessage: payment.errorMessage, send_otp : payment.send_otp, reference: payment.reference,
    // displayText: payment.displayText, chargeReference: payment.chargeReference
    }
}
    export default connect(mapStateToProps, actions)(InvestmentPage);