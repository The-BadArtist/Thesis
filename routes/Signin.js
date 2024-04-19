const express = require('express');
const router = express.Router();
const path = require('path');


const pagePath = path.join(__dirname, '..','pages','Sign_In');



router.route('/')
.get((req, res) => {
    res.sendFile(pagePath + '/Signin.html');
})



module.exports = router






module.exports = router