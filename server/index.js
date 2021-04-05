const express = require('express');
const app = express();


app.get('/api', (req, res, next) => {
    res.status(200).json({ "msg": "Hello world" });
});



app.listen(4000, () => console.log("server in running on port 4000"));