import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import placeholderimg from "../images/placeholder.png"
class Books extends Component {
  state = {
    books: [],
    bookSearch: "",
    
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 
  handlebooksearch = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
        .then(res => 
          //console.log(res)
          this.setState({ books: res.data })
          )
        .catch(err => console.log(err));
    this.setState({
        bookSearch: ""
    });
  };
  handleBookSave= (event, title, authors, description, href, thumbnail) =>{
    event.preventDefault();
    API.saveBook({
      title: title,
      authors: authors,
      description: description,
      href: href,
      thumbnail: thumbnail
  })
  .then(res => alert("Book is saved Successfully"));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search </h1>
              <h5>Search for and Save Books of Interest</h5>
            </Jumbotron>
            <form>
              <h3>Book Search</h3>
              <label>Book</label>
              <Input
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
                name="bookSearch"
                placeholder="Enter Book Title"
              />
              <FormBtn onClick={this.handlebooksearch}>
                Search
              </FormBtn>
            </form>

            <div className="book-result">
              
                {!this.state.books.length ? 
                <h3 className="text-center">No Result To Display</h3>: (
                  <List>
                    {this.state.books.map(book => {
                    return (
                      <ListItem
                        key={book.volumeInfo.infoLink}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors?book.volumeInfo.authors: "Not Defined"}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks ? 
                        book.volumeInfo.imageLinks.smallThumbnail : placeholderimg}
                        href={book.volumeInfo.infoLink}
                        handleBookSave={this.handleBookSave}
                        Booksaved={false}
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

export default Books;