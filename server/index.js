const express = require('express');
const graphqlHTTP = require('express-graphql'); //EXPRESS-GRAPHQL ALLOW EXPRESS TO UNDERSTAND GRAPHQL


const app = express();


//GraphQL middleware options must contain a schema
app.use('/graphql', graphqlHTTP({

}));

app.listen(4000, ()=>{
    console.log('Now listening for request. server is running on http://localhost:4000');
})