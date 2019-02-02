import React, { Component } from 'react';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { graphql, compose } from 'react-apollo';
import { Button } from 'react-bootstrap';



//BECAUSE THIS ISN'T JS WE NEED TEMPLATE STRING




class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }



    displayAuthor() {
        let data = this.props.getAuthorsQuery;
        // console.log(this.props);
        if (data.loading) {
            return (<option disabled>Loading Author....</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }


    submitForm(e) {
        //THIS NO LONGER JUST CONNA REFRESH THE PAGE
        e.preventDefault();
        // console.log(this.state);

        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        });
    }



    render() {
        //   console.log(this.props.data);
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label >Book name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label >Genre:</label>
                    <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label >Author:</label>
                    <select onChange={(e) => this.setState({ authorId: e.target.value })}>
                        <option>Select Another</option>
                        {this.displayAuthor()}
                    </select>
                </div>
                <button style={{border:'none',background: "blue", padding:'10px 30px', color:'white'}}>Add</button>
            </form>
        );
    }
}
//WE NEED TO COMPOST TWO QUERIES TOGETHER
// export default graphql(getAuthorsQuery)(AddBook);


export default compose(
    //LIST OUT DIFFRENT QUERIES AND MUTATION
    // THIS TWO MUTATION AND QUERIES COMPOSE TOGETHER AND BOTH BIND WITH ADDBOOK
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);

