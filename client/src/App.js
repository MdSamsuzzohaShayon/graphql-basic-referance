import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'; //BIND APOLLO WITH REACT . HELP REACT TO UNDERSTAND APOLLO

import BookList from './components/BookList';

//APOLLO CLIENT SETUP
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div id='main'>
          <h1>Hello World</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
