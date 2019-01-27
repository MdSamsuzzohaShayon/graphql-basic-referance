const graphql = require('graphql');
//GRABBING ALL DEFFRENT PROPERTIES FROM GRAPHQL PACKAGE
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID
} = graphql;
//LOAD OF DIFFRENT TRICKS TO FIND DATA OR CHANGE DATA 
const _ = require('lodash');


//DUMMY DATA. LETTER ON WE WILL USE MONGO DB FOR THIS
let books = [{
        name: 'Aquaman',
        genre: 'Superhero',
        id: '1'
    },
    {
        name: 'Fantastic Beasts: Where to find them',
        genre: 'Fantasy',
        id: '2'
    },
    {
        name: 'Coco',
        genre: 'Animation',
        id: '3'
    }
];




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
                console.log(typeof(args.id));
                //CODE TO GET DATA FROM DB / OTHER SOURCE
                // args.id //ACCESSING ALL PROPERTY OF ID
                return _.find(books, {
                    id: args.id
                });
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