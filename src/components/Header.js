import React from 'react';
import {Container, Button, ButtonGroup} from 'reactstrap'
import NavBar from './NavBar'
import appstore from '../assets/images/appstore.png'
import playstore from '../assets/images/playstore.png'
import {withRouter} from 'react-router-dom'

 class Header extends React.Component {
  render() {
    return (
      <header className="header">
       <NavBar scrollToHref={this.props.scrollToHref} showAuth/>

       <Container>
          <h1 className="header-banner-1">Create your Livestock</h1>
          <h1 className="header-banner-1">Farm in 5 minutes</h1>
          <p>Goatti helps you start livestock farming withoutany Stress or Hassle.</p>

          <h3>Earn 30% ROI in 6month! </h3>
          <p> <Button onClick={() => this.props.history.push('/register')}>Create Account</Button>{' '}</p>
        <div className='stores'>
          <a href='' ><img src={appstore}/></a>
        <a href='https://play.google.com/store/apps/details?id=ng.goatti' ><img src={playstore}/></a>
        </div>
      </Container>
      </header>
    );
  }
}

export default withRouter(Header)