import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, Card, CardBody, Checkbox, Select, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../../actions';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import {validateEmail, validatePhoneNumber} from '../../../services/ValidationServices'

class Register extends Component {
state = {
  firstname: '',
  lastname: '',
  email: '',
  telephone: '',
  state: '',
  username: '',
  password: '',
  country: 'Nigeria',
  checked: false,
  error: false,
  message: ''
}

change = (obj) =>{
  let {key, value} = obj;
  this.setState({[key]: value});
};

 componentWillReceiveProps(newProps){
   console.log(newProps.user.token)
   if (newProps.user.token) {
     let goattiuserToken = localStorage.getItem('GoattiUserToken')

     if (goattiuserToken && this.props.user.token) {
       this.props.updateUser()
       this.props.getAllNotifications()
       this.props.setTransactions()
       this.props.getAddresses();
       this.props.fetchProducts();

     }

       this.props.history.push('/');
   }



     if (newProps.signUpError && this.props.user.token === newProps.user.token) {
        console.log("Erooror", this.props.signUpError)
       console.log("errrrrrr")
       this.setState({
         error: true,
         message: newProps.signUpErrorMessage
       });

     }

}


signup = async (e) =>{
  e.preventDefault();
  let {
    firstname,
    lastname,
    email,
    telephone,
    state,
    username,
    password,
    country,
    checked,
  } = this.state;


   if(checked && email !== '' && password !== '' && username !== ''
    && firstname !== '' && lastname !== '' && state !== '' && telephone !== ''){
           let emailValidation =  validateEmail(this.state.email)
           if(emailValidation == false){
              this.setState({error: true, message: 'Enter a proper email address'});
               return;
           }
           let phoneValidation =  validatePhoneNumber(this.state.telephone)
           if(phoneValidation == false){
            this.setState({error: true, message: 'Enter a proper phone number'});
            return;
        }
          this.props.createUser(this.state.firstname, this.state.lastname, this.state.country, this.state.state, this.state.username, this.state.password, this.state.email, this.state.telephone);

        }else{
           this.setState({...this.state, error: true, message: "Please ensure you enter a value in all fields. All fields are required"})
        }
}
  render() {
    return (
      <div>
         <SweetAlert
        show={this.state.error}
        title="Authentication Error"
        text={this.state.message}
        onConfirm={() => this.setState({ error: false })}
      />

      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6" className="topCard">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <div className="form">
                     <div className="names">
                       < InputGroup className = "mb-3" >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Firstname" autoComplete="Firstname" required onChange={(e) => this.change({key: 'firstname', value: e.target.value})} />
                    </InputGroup>

                       < InputGroup className = "mb-3" >
                      <Input type="text" placeholder="Lastname" autoComplete="Lastname" required onChange={(e) => this.change({key: 'lastname', value: e.target.value})}/>
                    </InputGroup>
                     </div>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <FontAwesomeIcon icon="envelope" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" autoComplete="email" required onChange={(e) => this.change({key: 'email', value: e.target.value})}/>
                    </InputGroup>

                     <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="tel" placeholder="Telephone" autoComplete="telephone" required onChange={(e) => this.change({key: 'telephone', value: e.target.value})}/>
                    </InputGroup>

                     <div className="names">
                       < InputGroup className = "mb-3" >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="map" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="State" autoComplete="State" required onChange={(e) => this.change({key: 'state', value: e.target.value})}/>
                    </InputGroup>
                       < InputGroup className = "mb-3" >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="globe-africa" />
                        </InputGroupText>
                      </InputGroupAddon>
                     <select className="form-control" value="Country" onChange={(e) => this.change({key: 'country', value: e.target.value})}>
                       <option disabled>Country</option>
                       <option>Nigeria</option>
                     </select>
                    </InputGroup>

                     </div>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" onChange={(e) => this.change({key: 'username', value: e.target.value})}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="key" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" onChange={(e) => this.change({key: 'password', value: e.target.value})}/>
                    </InputGroup>

                    <div className="text-center">
                    <Button color="submit" onClick={(e) => this.signup(e)}>Create Account</Button>


                    </div>


                  <div className="form-group text-center pad">

                      <Input type="checkbox"  onChange={(e) => this.change({key: 'checked', value:!this.state.checked})} value={this.state.checked}/> <label><span>Terms & conditions</span> agreed.</label>
                      </div>
                    </div>
                  </Form>
                  <Row>
                    <Col xs="12" sm="12" className="login text-center">
                      Have an account < Button color = "link"
                     tag = {
                       Link
                     }
                     to = "/login"
                     className = "px-0" > SIGN IN </Button>
                    </Col>

                  </Row>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
            </div>
    );
  }
}
const mapStateToProps = ({auth}) =>{
  return {
    signUpError: auth.signUpError,
    signUpErrorMessage: auth.signUpErrorMessage,
    user: auth.user

  }
}
export default connect(mapStateToProps, actions)(Register);
