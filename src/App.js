import React, { Component, Suspense, lazy } from 'react';
import {Route, Switch } from 'react-router-dom';
import {
  Router,

} from 'react-router'
import {
  createBrowserHistory
} from 'history'
import Loadable from 'react-loadable';
import './App.css';
import { Provider } from 'react-redux'
import {PrivateRoute} from './helpers/PrivateRoute'
import { library } from '@fortawesome/fontawesome-svg-core'



import { faCheck, faUser, faKey, faEnvelope, faPhone, faMap, faGlobeAfrica, faBars, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import store from './store';
library.add(faCheck, faUser, faKey, faEnvelope, faPhone, faMap, faGlobeAfrica, faBars, faVectorSquare)

let history = createBrowserHistory();


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


const Login = lazy(() => import('./views/Pages/LoginPage/Login'));


const HomePage = lazy(() => import('./views/Pages/HomePage/HomePage'));

const Investment = lazy(() => import('./views/Pages/InvestmentPage/InvestmentPage'));

const FAQs = lazy(() => import('./views/Pages/Legal/FAQs'));

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Privacy = Loadable({
  loader: () => import('./views/Pages/Legal/Privacy'),
  loading
});


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={loading}>
          <Switch>
           <Route exact path="/" name="Home Page" component={HomePage} />
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/privacy" name="privacy" component={Privacy} />
            <Route exact path="/faqs" name="privacy" component={FAQs} />
            <PrivateRoute exact path="/investment" component={Investment}/>
          </Switch>
          </Suspense>
      </Router>
      </Provider>
    );
  }
}


const userExists = () =>{
  return localStorage.getItem('GoattiUserToken')
}
function requireAuth(nextState, replace){
  console.log("dhdhdhdhdhd", nextState, replace)
  if (!userExists()) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}
export default App;
