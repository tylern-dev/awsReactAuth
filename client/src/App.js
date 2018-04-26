import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import NotFound from './containers/NotFound';


class Router extends React.Component {




  // had to use render in order to pass props
  render() {
    return (

      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route component={NotFound} />
        </Switch>

      </Fragment>


    );
  }
}

export default Router;
