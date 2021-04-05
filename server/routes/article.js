const express = require('express');
const multer = require('multer');
const Article = require('../models/Article');

const router = express.Router();





router.get('/', (req, res, next) => {
    res.status(200).json({ 'msg': "some json data" });
});





// The disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
    // The folder to which the file has been saved
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    // The name of the file within the destination
    filename: (req, file, callback) => {
        // Name of the file on the user's computer
        callback(null, file.originalname);
    }
});




const upload = multer({ storage });





router.post('/add', upload.single('img'), (req, res, next) => {
    const newArticle = new Article({
        title: req.body.title,
        desc: req.body.desc,
        img: req.file.originalname
    });
    console.log("Request body: ", req.body);
    console.log("Request file: ", req.file);
});




router.put("/update/:id", upload.single('img'), (req, res, next) => {
    Article.findById(req.params.id)
        .then(al => {
            al.title = req.body.title;
            al.desc = req.body.desc;
            al.img = req.file.originalname;
        })
});






module.exports = router;