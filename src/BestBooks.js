import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { Card, Carousel } from "react-bootstrap";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount = () => {
    const url = process.env.REACT_APP_SERVER;
    axios
      .get(url)
      .then((books) => this.setState({ books: books.data }))
      .catch((error) => console.log(error));
  };
  render() {
    const { books } = this.state;
    console.log(books);
    return (
      <Jumbotron>
        <h1 style={{color:"#fff"}}>My Favorite Books</h1>
        <Carousel>
          {books.map((book) => {
            return (
              <Carousel.Item>
                <Card style={{ width: "24rem"}}>
                  <Card.Img variant="top" src={book.img} alt={book.name}/>
                  <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Jumbotron>
    );
  }
}

export default MyFavoriteBooks;
