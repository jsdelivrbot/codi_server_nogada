var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('blog/blog_front', {
        nickname: req.session.nickname
    });
});

router.get('/posting', function (req, res) {
    res.render('blog/blog_posting', {
        nickname: req.session.nickname
    });
});

router.get('/search', function (req, res) {
    res.render('blog/blog_search', {
        nickname: req.session.nickname
    });
});

router.post('/search', function (req, res) {
    var data = req.body.data;
    res.render('blog/blog_search', {
        nickname: req.session.nickname,
        data: data
    });
});

router.get('/edit', function (req, res) {
    res.render('blog/blog_edit', {
        nickname: req.session.nickname
    });
});


module.exports = router;
