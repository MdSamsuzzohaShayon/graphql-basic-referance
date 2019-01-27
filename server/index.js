const express = require('express');
const graphqlHTTP = require('express-graphql'); //EXPRESS-GRAPHQL ALLOW EXPRESS TO UNDERSTAND GRAPHQL
const schema = require('./schema/schema');



const app = express();
//STARTING
//https://www.youtube.com/watch?v=Y0lDGjwRYKw&index=1&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f
//CURRENT
//https://www.youtube.com/watch?v=ALqNbTik44o&index=8&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f



//GraphQL middleware options must contain a schema
//THAT MEANS WE NEED TO MAKE A SCHEMA TO DESCRIBE HOW DATA ON GRAPH WILL LOOK
app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000, ()=>{
    console.log('Now listening for request. server is running on http://localhost:4000');
})