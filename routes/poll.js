var express = require('express');
var router = express.Router();

/* GET 404 page. */
router.get('/', function(req, res, next) {
    next();
});

router.get('/:poll_id/select/', function(req, res, next) {
    var poll_id = req.params.poll_id;
    var token = req.query.token;
    if (token) {
        res.render('poll/select',{
            poll_id: poll_id,
            token: token
        });
    }else{
        next();
    }
});

router.get('/:poll_id/settings/', function(req, res, next) {
    var poll_id = req.params.poll_id;
    var token = req.query.token;
    if (token) {
        res.render('poll/settings',{
            poll_id: poll_id,
            token: token
        });
    }else{
        next();
    }
});

router.get('/:poll_id/', function(req, res,next) {
    var poll_id = req.params.poll_id;
    var token = req.query.token;
    if(token){
        res.render('poll/vote', {
            poll_id: poll_id,
            token: token
        });
    }else{
        next();
    }
});

router.get('/:poll_id/dashboard/', function(req, res, next) {
    var poll_id = req.params.poll_id;
    var token = req.query.token;
    if (token) {
        res.render('poll/dashboard',{
            poll_id: poll_id,
            token: token
        });
    }else{
        next();
    }
});

module.exports = router;