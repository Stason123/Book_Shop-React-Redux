import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react'

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }
  render() {
    const { books, isReady } = this.props;
    return(
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={3}>
          {
            !isReady ? 'Loading...' : books.map((book, i) => (
              <BookCard key={i} {...book}/>
            ))
          }
        </Card.Group>
         
        
      </Container>
    );
  }
}

export default App;