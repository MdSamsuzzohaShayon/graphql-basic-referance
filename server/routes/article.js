const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    res.status(200).json({ 'msg': "some json data" });
});



module.exports = router;