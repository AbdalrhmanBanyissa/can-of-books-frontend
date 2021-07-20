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
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: [],
      bookName:'',
      bookDescription:'',
      bookUrl:'',
      email:'',
    }
  }

  componentDidMount = () => {
    const url = process.env.REACT_APP_SERVER;
    axios
      .get(url)
      .then((books) => this.setState({ books: books.data }))
      .catch((error) => console.log(error));
  };
  handleChangeName = (event) => {
    this.setState({bookName:event.target.value})
  }
  handleChangeDescription = (event) => {
    this.setState({bookDescription:event.target.value})
  }
  handleChangeUrl = (event) => {
    this.setState({bookUrl:event.target.value})
  }

  handleAddNewBook = (event) => {
    event.preventDefault();
    const URL = process.env.REACT_APP_SERVER;
    const { bookName,bookDescription,bookUrl,email } = this.state;
    const newBook = {
      name:bookName,
      description:bookDescription,
      img:bookUrl,
      email:this.props.auth0.user.email,
    }
    axios
    .post(URL,newBook)
    .then((books)=>this.setState({books:books.data}))
    .catch((error)=>console.log(error))
  }

  render() {
    const { isAuthenticated } = this.props.auth0
    return(
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated?<MyFavoriteBooks books={this.state.books} onChangeName={this.handleChangeName} onChangeDescription={this.handleChangeDescription} onChangeUrl={this.handleChangeUrl} onAddNewBook={this.handleAddNewBook}/>:<Login />}
              </Route >
              <Route path="/User">
              {isAuthenticated?<User email={this.state.email}/>:<></>}
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
