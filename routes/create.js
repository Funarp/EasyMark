var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//create application/x-www-form-urlencoded decoder
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
    res.render('create', { title: 'Create - EasyMark' });
});

router.post('/preview', urlencodedParser, function(req, res, next) {
    var md = req.body.md;
    var act = req.body.act;
    if (act === "pdf") {
        res.render('preview', { title: 'Preview - EasyMark', md: md, action: "window.print()" });
    } else if (act === "pic") {
        res.render('preview', { title: 'Preview - EasyMark', md: md, action: "generate()" });
    } else if (act === "preview") {
        res.render('preview', { title: 'Preview - EasyMark', md: md, action: "" });
    }
});

module.exports = router;