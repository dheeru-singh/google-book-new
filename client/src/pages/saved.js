import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getSavedBooks()
    .then(res => this.setState({ books: res.data }))
  }
  handleBookdelete = (event, id) => {
    event.preventDefault();
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search </h1>
              <h5>Search for and Save Books of Interest</h5>
            </Jumbotron>
            <div className="book-result">
              {!this.state.books.length ? 
              <h3 className="text-center">No Result To Display</h3>: (
                <List>
                  {this.state.books.map(book => {
                  return (
                  <ListItem
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    thumbnail={book.thumbnail }
                    href={book.href}
                    handleBookdelete={this.handleBookdelete}
                    Booksaved={true}
                  />
                );
                })}
              </List>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;