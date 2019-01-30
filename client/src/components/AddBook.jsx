import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';



//BECAUSE THIS ISN'T JS WE NEED TEMPLATE STRING
const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;



export class AddBook extends Component {
    displayAuthor(){
        let data = this.props.data;
        if(data.loading){
            return (<option disabled>Loading Author....</option>);
        }else{
            return data.authors.map(author=>{
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }
  render() {
    //   console.log(this.props.data);
    return (
      <form id="add-book">
        <div className="field">
            <label >Book name:</label>
            <input type="text"/>
        </div>
        <div className="field">
            <label >Genre:</label>
            <input type="text"/>
        </div>
        <div className="field">
            <label >Author:</label>
            <select>
                <option>Select Another</option>
                {this.displayAuthor()}
            </select>
        </div>
        <button>Add</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
