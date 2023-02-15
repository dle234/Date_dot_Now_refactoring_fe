const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/contentLook/:id', function (req, res) {
	var pageid = req.params['id'];
    console.log("pageid:",pageid);
    res.render('index');
    
})

module.exports = router;

