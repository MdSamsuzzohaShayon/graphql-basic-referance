import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';


//TWO STEP TO MAKE QUERIES IN COMPONENT
// TWO STEP
// 1. CONSTRUCT THE QUERIES
// 2. TAKE THE QUERIES AND BIND WITH COMPONENT


//BECAUSE THIS ISN'T JS WE NEED TEMPLATE STRING
const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`;



export class BookList extends Component {

    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return (<div>Loding Books...</div>);
        }else{
            return data.books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                );
            })
        }
    }


  render() {
    //   console.log(this.props);
    return (
      <div>
        <ul id="book-list">
            {this.displayBooks()}
        </ul>
      </div>
    )
  }
}


//BINDING THIS GETBOOKSQUERY WITH BOOKLIST WITH THE HELP OF GRAPHQL
export default graphql(getBooksQuery)(BookList);
