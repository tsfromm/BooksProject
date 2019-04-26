import React, { Component } from "react";
import "../css/Bookshelf.css";
import Book from "./Book";

class Bookshelf extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  } 

  addBook() {
    this.state.books.push({
      id: Date.now()
    });
    this.setState({
      books: this.state.books
    });
  }

  deleteBook(id) {
    let newBookArr = this.state.books;
    // eslint-disable-next-line
    newBookArr.map((book, index) => {
      if (id === book.id) {
        newBookArr.splice(index, 1);
      }
    });
    this.setState({
      books: newBookArr
    });
  }
  // addShelf() {
  //   //add function to add new shelf
  // }

  render() {
    return (
      <div className="container">
      <div className="tableDiv">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Bookshelf
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="Bookshelf.js">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Bookshelf2.js">
                  Fantasy
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Bookshelf3.js">
                  Sci-fi
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="Bookshelf4.js">
                  Classic
                </a>
              </li>
            </ul>
          </div>
          <button
                class="btn float-right btn-success"
                onClick={this.addBook.bind(this)} >
                {" "}
                Add Book
              </button>
        </nav>
      </div>
        <div className="all">
          <div className="div-Bookshelf">
            <div className="row">
              {this.state.books.map(book => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    body={book.body}
                    image={book.image}
                    deleteHandler={this.deleteBook.bind(this)}
                  />
                );
              })}
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
} 

export default Bookshelf;
