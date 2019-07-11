import React, { Component } from 'react';
import './InvestmentPage/investment.css'
//import the library
import PaystackButton from 'react-paystack';

class PaymentPage extends Component {

  state = {
    key: "pk_live_60d7ecefe834c5e6b348f61c8043ec8f6b761d64", //PAYSTACK PUBLIC KEY

  }

  callback = (response) => {
    console.log("response", response); // card charged successfully, get reference here
    if (response) {
      this.props.result(response);
    }
  }


  render() {
    return (
      <div className="pay">
        <p>
          <PaystackButton
            text="Make Payment"
            className="btn btn-success payButton"
            callback={this.callback}
            close={() => this.props.result('closed')}
            disabled={false}
            embed={false}
            reference={this.props.reference}
            email={this.props.email}
            amount={this.props.amount}
            paystackkey={this.state.key}
            tag="button"
          />
        </p>
      </div>
    );
  }
}

export default PaymentPage;