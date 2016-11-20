var express = require('express');
var router = express.Router();



router.get('/profile', function (req, res) {
    res.render('my/my_profile', {
        nickname: req.session.nickname
    });
});


router.get('/post', function (req, res) {
    res.render('my/my_post', {
        nickname: req.session.nickname
    });
});


router.get('/series', function (req, res) {
    res.render('my/my_series', {
        nickname: req.session.nickname
    });
});

router.get('/seriesclicked', function (req, res) {
    res.render('my/my_seriesClicked', {
        nickname: req.session.nickname
    });
});


router.get('/tutorial', function (req, res) {
    res.render('my/my_tutorial', {
        nickname: req.session.nickname
    });
});

module.exports = router;
