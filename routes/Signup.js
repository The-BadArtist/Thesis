const express = require('express');
const router = express.Router();
const path = require('path');


const pagePath = path.join(__dirname, '..','pages','Sign_Up','SignUp.html');
console.log(pagePath)
// app.use('/signup', express.static(pagesPath + '/Sign_Up'));

router.route('/')
.get((req, res) => {
    res.sendFile(pagePath);
})



module.exports = router