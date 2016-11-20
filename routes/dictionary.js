var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('dictionary/dic_front', {
        nickname: req.session.nickname
    });
});

router.get('/contents', function (req, res) {
    res.render('dictionary/dic_contents', {
        nickname: req.session.nickname
    });
});

router.get('/search', function (req, res) {
    res.render('dictionary/dic_search', {
        nickname: req.session.nickname
    });
});

router.post('/search', function (req, res) {
    var data = req.body.data;
    res.render('dictionary/dic_search', {
        nickname: req.session.nickname,
        data: data
    });
});

router.get('/edit', function (req, res) {
    res.render('dictionary/dic_edit', {
        nickname: req.session.nickname
    });
});

module.exports = router;
