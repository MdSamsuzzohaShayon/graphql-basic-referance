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


export {getAuthorsQuery, getBooksQuery} ;