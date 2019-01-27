const graphql = require('graphql');

//LOAD OF DIFFRENT TRICKS TO FIND DATA OR CHANGE DATA 
const _ = require('lodash');

const Book = require('../models/book');
const Author = require('../models/author');

//GRABBING ALL DEFFRENT PROPERTIES FROM GRAPHQL PACKAGE
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;



//DUMMY DATA. LETTER ON WE WILL USE MONGO DB FOR THIS
/* 
let books = [{
        name: 'Aquaman',
        genre: 'Superhero',
        id: '1',
        authorId: '1'
    },
    {
        name: 'Fantastic Beasts: Where to find them',
        genre: 'Fantasy',
        id: '2',
        authorId: '2'
    },
    {
        name: 'Coco',
        genre: 'Animation',
        id: '3',
        authorId: '3'
    },
    {
        name: 'Anna Karenina',
        genre: 'Superhero',
        id: '4',
        authorId: '2'
    },
    {
        name: 'Madame Bovary',
        genre: 'Fantasy',
        id: '5',
        authorId: '3'
    },
    {
        name: 'War and Peace',
        genre: 'Animation',
        id: '6',
        authorId: '2'
    }
];


let authors = [{
        name: 'Stephen King',
        age: 44,
        id: '3'
    },
    {
        name: 'William Shakespeare',
        age: 54,
        id: '2'
    },
    {
        name: 'J.K. Rowling',
        age: 41,
        id: '1'
    },
]; */








//DEFINING FIRST OBJECT TYPE (BOOKTYPE)
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                /* console.log(parent);
                 return _.find(authors, {
                     id: parent.authorId
                 });*/
            }
        }
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        books: {
            type: new GraphQLList(BookType), //BECAUSE IT IS LIST OF GROUP
            resolve(parent, args) {
                /*return _.filter(books, {
                    authorId: parent.id
                })*/
            }
        }
    })
});











//DEFINE ROOT QUERY
//HOW WE DESCRIBE HOW A USER INITIALL JUMP INTO THE GRAPH AND GRAB DATA
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            // THIS IS VERY IMPORTENT FUNCTION
            resolve(parent, args) {
                console.log(typeof (args.id));
                //CODE TO GET DATA FROM DB / OTHER SOURCE
                // args.id //ACCESSING ALL PROPERTY OF ID
                /*return _.find(books, {
                    id: args.id
                });*/
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                /*return _.find(authors, {
                    id: args.id
                });*/
            }
        },
        // THIS IS GONNA BE QUERY FOR A LIST OF BOOKS
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //return books
            }
        },
        // THIS IS GONNA BE QUERY FOR A LIST OF AUTHOR
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                //return authors
            }
        }
    }
});










//WHEN SOMEONE QUERY FOR BOOKTYPE FROM FRONT END
/*book(id: '123'){
    name
    genre
}*/










module.exports = new GraphQLSchema({
    query: RootQuery
});