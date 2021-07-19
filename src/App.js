import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './BestBooks';
import Login from './Login';
import User from './User';

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated?<MyFavoriteBooks />:<Login />}
              </Route >
              <Route path="/User">
              {isAuthenticated?<User />:<></>}
              </Route >
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
