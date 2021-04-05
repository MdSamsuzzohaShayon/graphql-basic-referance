require('dotenv').config({ path: "./config/.env" });
const express = require('express');
const mongoose = require('mongoose');

const article = require('./routes/article');


const app = express();

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Mongodb is connected'));


app.get('/api', (req, res, next) => {
    // res.status(200).json({ "msg": "Hello world" });
    res.send({ "msg": "Hello world" });
});
app.use('/api/article', article);



app.listen(process.env.PORT, () => console.log("server in running on port 4000"));