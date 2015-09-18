var express = require('express');
var router = express.Router();

/* GET 404 page. */
router.get('/', function(req, res, next) {
    next();
});

router.get('/:rsvp_id/settings/', function(req, res, next) {
    var rsvp_id = req.params.rsvp_id;
    var token = req.query.token;
    if (token) {
        res.render('rsvp/settings', {
            rsvp_id: rsvp_id,
            token: token
        });
    } else {
        next();
    }
});

router.get('/:rsvp_id/', function(req, res) {
    var rsvp_id = req.params.rsvp_id;
    var token = req.query.token;
    res.render('rsvp/rsvp', {
        rsvp_id: rsvp_id,
        token: token
    });
});

router.get('/:rsvp_id/dashboard/', function(req, res, next) {
    var rsvp_id = req.params.rsvp_id;
    var token = req.query.token;
    if (token) {
        res.render('rsvp/dashboard', {
            rsvp_id: rsvp_id,
            token: token
        });
    } else {
        next();
    }
});

module.exports = router;