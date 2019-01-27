const graphql = require('graphql');
//GRABBING ALL DEFFRENT PROPERTIES FROM GRAPHQL PACKAGE
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;








//DEFINING FIRST OBJECT TYPE (BOOKTYPE)
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});


//DEFINE ROOT QUERY
//HOW WE DESCRIBE HOW A USER INITIALL JUMP INTO THE GRAPH AND GRAB DATA
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                //CODE TO GET DATA FROM DB / OTHER SOURCE
                // args.id //ACCESSING ALL PROPERTY OF ID
            }
        }
    }
});
//WHEN SOMEONE QUERY FOR BOOKTYPE FROM FRONT END
/*book(id: '123'){
    name
    genre
}*/



module.exports = new GraphQLSchema ({
    query: RootQuery
});