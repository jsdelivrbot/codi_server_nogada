var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log("user login: " + req.session.nickname);
    res.render('index', {
        nickname: req.session.nickname
    });
});
router.get('/search', function (req, res) {
    res.render('search', {
        nickname: req.session.nickname
    });
});
router.post('/search', function (req, res) {
    //req.body.search
    res.render('search', {
        nickname: req.session.nickname
    });
});

router.get('/pad2', function (req, res) {
    res.render('pad2', {
        nickname: req.session.nickname
    });
});

module.exports = router;
