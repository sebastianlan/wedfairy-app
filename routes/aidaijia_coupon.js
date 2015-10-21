var express = require('express');
var router = express.Router();

/* GET 404 page. */
router.get('/', function(req, res, next) {
    next();
});

router.get('/:aidaijia_coupon_id/', function(req, res) {
    var aidaijia_coupon_id = req.params.aidaijia_coupon_id;
    res.render('aidaijia_coupon/redirect', {
        aidaijia_coupon_id: aidaijia_coupon_id
    });
});

module.exports = router;