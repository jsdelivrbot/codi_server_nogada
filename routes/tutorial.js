var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('tutorial/tuto_front', {
        nickname: req.session.nickname
    });
});

router.get('/contents', function (req, res) {
    res.render('tutorial/tuto_contents', {
        nickname: req.session.nickname
    });
});


router.get('/search', function (req, res) {
    res.render('tutorial/tuto_search', {
        nickname: req.session.nickname
    });
});

router.post('/search', function (req, res) {
    res.render('tutorial/tuto_search', {
        nickname: req.session.nickname
    });
});

router.get('/edit', function (req, res) {
    res.render('tutorial/tuto_edit', {
        nickname: req.session.nickname
    });
});


router.get('/my', function (req, res) {
    res.render('tutorial/tuto_my', {
        nickname: req.session.nickname
    });
});

module.exports = router;
