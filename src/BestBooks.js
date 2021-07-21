import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import { Card, Carousel } from "react-bootstrap";

class MyFavoriteBooks extends React.Component {

  render() {
    const { books,onChangeName,onChangeDescription,onChangeUrl,onAddNewBook } = this.props;
    return (
      <Jumbotron>
        <h1 style={{color:"rgb(64 22 22)"}}>My Favorite Books</h1>
        <div style={{position:"relative",left:"25%"}}>
        <forom>
          <input onChange={onChangeName} type="text" placeholder="Book name" />
          <input onChange={onChangeDescription} type="text" placeholder="Book description"/>
          <input onChange={onChangeUrl} type="text" placeholder="Book img url"/>
          <button onClick={onAddNewBook} className="btn btn-secondary btn-sm m-2">Add new book</button>
        </forom>
        </div>
        
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
                  <button className="btn btn-danger">Delete this book</button>
                  <button className="btn btn-warning">Update this book</button>
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
