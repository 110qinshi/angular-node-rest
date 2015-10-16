/**
 * Created by hxl on 2015/10/16.
 */
'use strict'

var express     = require('express');
var router      = express.Router();
var controller  = require('./activity.controller');

router.get('/getActivityList', controller.getActivityList);
module.exports = router;