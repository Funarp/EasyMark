var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('create', { title: 'Create - EasyMark' });
});

module.exports = router;