var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Aragon Plaza' });
});

/* GET Announcements page. */
router.get('/announce', function(req, res, next) {
    res.render('announce', { title: 'Announcements' });
});

/* GET Board page. */
router.get('/board', function(req, res, next) {
    res.render('board', { title: 'Board of Administration' });
});

/* GET Bulletin Board page. */
router.get('/bulletin', function(req, res, next) {
    res.render('bulletin', { title: 'Bulletin Board' });
});

/* GET Requests page. */
router.get('/requests', function(req, res, next) {
    res.render('requests', { title: 'Request Services' });
});

/* GET users listing. */
router.get('/', function(req, res, next ) {
    res.send('respond with a resource');
});

module.exports = router;
