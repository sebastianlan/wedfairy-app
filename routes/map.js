var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.redirect('http://www.wedfairy.com/');
    next();
});

router.get('/:map_id/settings/', function(req, res, next) {
    var map_id = req.params.map_id;
    var token = req.query.token;
    if (token){
        res.render('map/settings',{
            map_id: map_id,
            token: token
        });
    } else {
        next();
    }
});

router.get('/mark/', function(req, res, next) {
    res.render('map/mark', {});
});

router.get('/:map_id/', function(req, res, next) {
    var map_id = req.params.map_id;
    res.render('map/show', {
        map_id: map_id
    });
});

module.exports = router;
