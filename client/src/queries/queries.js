import {gql} from 'apollo-boost';

//BECAUSE THIS ISN'T JS WE NEED TEMPLATE STRING
const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`;



const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;


const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name:$name, genre: $genre, authorId:$authorId){
            name
            id
        }
    }
`;





export {getAuthorsQuery, getBooksQuery, addBookMutation} ;