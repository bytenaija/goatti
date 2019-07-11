import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './login.css'
import NavBar from '../../../components/NavBar'
import Logo from '../../../assets/images/logo.png'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import SweetAlert from 'sweetalert2-react';
import {connect} from 'react-redux'
import * as actions from '../../../actions'

class Login extends Component {

  state = {
    username: '',
    password: '',
    error: false,
    message: ''
  }
change = (obj) =>{
  let {key, value} = obj;
  this.setState({[key]: value});
};

  login = (e) => {
    e.preventDefault();

    this.props.authenticate(this.state.username, this.state.password)
  }


  componentWillReceiveProps(newProps){
    if (newProps.isAuthenticating !== true && newProps.error) {
      this.setState({error: newProps.error, message: newProps.message});
    }

    if (newProps.isAuthenticating !== this.props.isAuthenticating && newProps.user.token !== this.props.user.token){
       let goattiuserToken = localStorage.getItem('GoattiUserToken');
       console.log(goattiuserToken)
      if (goattiuserToken && newProps.user.token) {
        this.props.updateUser()
        this.props.getAllNotifications()
        this.props.setTransactions()
        this.props.getAddresses();
        this.props.fetchProducts();

      }
      this.props.history.push('/dashboard');


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
            <Col md="8" >
              <CardGroup className = "mt-5" >
                < Card className = "p-4 " >
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                           < FontAwesomeIcon icon = "user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" onChange={(e) => this.change({key: 'username', value: e.target.value})}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                           < FontAwesomeIcon icon = "key" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" onChange={(e) => this.change({key: 'password', value: e.target.value})}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="pri" className="px-4" onClick={(e) => this.login(e)}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" tag={Link} to="/forget-password" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%', backgroundColor: '--indigo' }}>
                  <CardBody className="text-center">
                    <div>
                     <img src={Logo} alt="goatti.ng logo" />
                     <span>We Breed, We sell</span>
                     <h3>You Earn</h3>
                      <Link to="/register">
                        <Button color="secondary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
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
    user: auth.user,
    error: auth.signInError,
    message: auth.signInErrorMessage,
    isAuthenticating: auth.isAuthenticating
  }
}

export default connect(mapStateToProps, actions)(Login);
