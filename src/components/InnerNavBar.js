import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
 } from 'reactstrap';
 import logo from '../assets/images/logo.png'
 import {NavLink as RRNavLink, withRouter} from 'react-router-dom'
 import './content.css'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      sideBar: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{backgroundColor: '#A30619'}}>
        <Navbar expand="md">
        <Button onClick={() => this.props.sidenav()} style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none',}}> <FontAwesomeIcon icon="bars" /> </Button>
          <NavbarBrand href="/"><img src={logo} className="brandImage" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

            <div className="ml-auto auth">
              <NavItem>
                <NavLink name="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#how" >How it Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/faqs" tag={RRNavLink}>FAQ</NavLink>
              </NavItem>

              <NavItem>
                <NavLink exact to="/blog" tag={RRNavLink}>Blog</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#plans">Our Plans</NavLink>
              </NavItem>
            {this.props.showAuth?
            <div className="mr-auto auth">
              <NavItem>
                <NavLink exact to="/login" tag={RRNavLink}>Signin</NavLink>
              </NavItem>

              <NavItem>
              <Button onClick={() => this.props.history.push('/register')}>Create Account</Button>{' '}
              </NavItem>

              </div>
              :

              <div className="auth" >
               <NavItem>
              <Button onClick={() => { localStorage.removeItem('GoattiUserToken'); this.props.history.push('/login')}}>Logout</Button>{' '}
              </NavItem>
              </div>
            }
            </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar)
