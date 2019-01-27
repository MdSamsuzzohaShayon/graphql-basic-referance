const express = require('express');
const graphqlHTTP = require('express-graphql'); //EXPRESS-GRAPHQL ALLOW EXPRESS TO UNDERSTAND GRAPHQL
const schema = require('./schema/schema');
const mongoose = require('mongoose');



const app = express();
//STARTING
//https://www.youtube.com/watch?v=Y0lDGjwRYKw&index=1&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f




mongoose.connect('mongodb://shayon:Shayon1234@ds113815.mlab.com:13815/graphql-basic');
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});




//GraphQL middleware options must contain a schema
//THAT MEANS WE NEED TO MAKE A SCHEMA TO DESCRIBE HOW DATA ON GRAPH WILL LOOK
app.use('/graphql', graphqlHTTP({
    schema, // THIS SCHEMA IS DEFINING THE GRAPH AND THE OBJECT TYPES ON THAT GRAPH 
    graphiql: true //WE CAN USE GRAPHIQL TOOL WHEN WE ARE IN http://localhost:4000/graphql
}));

app.listen(4000, () => {
    console.log('Now listening for request. server is running on http://localhost:4000');
})