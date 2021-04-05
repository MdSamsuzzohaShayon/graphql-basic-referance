require('dotenv').config({ path: "./config/.env" });
const express = require('express');
const app = express();


app.get('/api', (req, res, next) => {
    // res.status(200).json({ "msg": "Hello world" });
    res.send({ "msg": "Hello world" });
});



app.listen(process.env.PORT, () => console.log("server in running on port 4000"));