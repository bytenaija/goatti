import {ADD_CARD,
    MAKE_PAYMENT,
    PAYMENT_SUCCESSFUL,
    PAYMENT_FAILED,
    REMOVE_CARD,
SEND_OTP, SENDING_OTP} from './types'

    import PaymentService from '../services/PaymentService'


    export const  addPaymentCard = (card) =>async dispatch =>{
        dispatch(addCard(card))
       }

      export const removePaymentCard = () => async dispatch =>{
        dispatch(removeCard())
      }

       function addCard(card){
           return {
               type: ADD_CARD,
               card
           }
       }

       function removeCard(){
        return {
            type: REMOVE_CARD,

        }
    }

    export const payForFarm = (obj) => async dispatch => {
      dispatch(makingPayment())
      PaymentService.webPayForFarm(obj).then(message => {
        dispatch(makingPaymentSuccessfull(message))
      }).catch(err => {
         dispatch(makingPaymentFailed(err))
      })

    }

    export const makePayment = (obj) => async dispatch =>{
        return new Promise ((resolve, reject) =>{
            if(obj.farm && obj.card){
                let {card, farm} = obj;
                let date = card.cardExpiryDate.split("/")
                let paymentDetails = {
                    pin: card.pin,
                    number: card.cardNumber,
                    cvv: card.cardCVV,
                    expiry_month: date[0],
                    expiry_year: date[1],
                    amount: farm.amountInvested,
                    reference: farm.reference,
                    farm: true
                }

                dispatch(makingPayment())

                    PaymentService.makePayment(paymentDetails).then(message =>{

                     dispatch(makingPayment())
                        resolve(true)
                    }).catch(err =>{

                        if(err.status = 'send_otp'){
                            dispatch(sendOTP(err.reference, err.displayText, err.chargeReference))
                            resolve(err)
                        }else{
                            dispatch(makingPaymentFailed(err))
                            resolve(err)
                        }


                    })


                }else{
                    let {card, order} = obj;
                    let date = card.cardExpiryDate.split("/");
                    let amount = order.totalCost + order.tax;
                    console.log(amount)
                    let paymentDetails = {
                        number: card.cardNumber,
                        cvv: card.cardCVV,
                        expiry_month: date[0],
                        expiry_year: date[1],
                        amount,
                        reference: order.reference,
                        pin: card.pin
                    }

                    dispatch(makingPayment())

                    PaymentService.makePayment(paymentDetails).then(message =>{
                        dispatch(makingPaymentSuccessfull(message))
                        resolve(true)
                    }).catch(err =>{

                        if(err.status = 'send_otp'){
                            dispatch(sendOTP(err.reference, err.displayText, err.chargeReference))
                            resolve(err)
                        }else{
                            dispatch(makingPaymentFailed(err))
                            resolve(err)
                        }


                    })


                }

        })
        }
    function makingPayment(){
        return {
            type: MAKE_PAYMENT
        }
    }

    function makingPaymentSuccessfull(message){
        return {
            type: PAYMENT_SUCCESSFUL,
            message
        }
    }

    function makingPaymentFailed(error){
        return {
            type: PAYMENT_FAILED,
            error
        }
    }

   function sendOTP(reference, displayText, chargeReference){
        return {
            type: SEND_OTP,
            reference,
            displayText,
            chargeReference
        }
    }

    export const sendingOTP = (reference, otp, chargeReference, farm) => async dispatch =>{
        dispatch({
           type: SENDING_OTP
        })

        let paymentDetails = {
            reference,
            otp,
            chargeReference,
            farm
        }
        PaymentService.sendOTP(paymentDetails).then(message =>{
            //console.log("message", message)
            dispatch(makingPaymentSuccessfull(message))
        }).catch(err =>{

            //console.log("in payment action", err)
            // //console.log("in payment action", err.status)

                dispatch(makingPaymentFailed(err))
                // resolve(err)



        })
    }