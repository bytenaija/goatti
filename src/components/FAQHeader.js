import React from 'react';
import {Container, Button, ButtonGroup} from 'reactstrap'
import NavBar from './NavBar'

import {withRouter} from 'react-router-dom'

 class FAQHeader extends React.Component {
  render() {
    return (
      <header className="header-2">
       <NavBar />

       <Container>
          <h1 className="header-banner-1">Frequently Asked Questions -  FAQ?</h1>
         
      </Container>
      </header>
    );
  }
}

export default withRouter(FAQHeader)