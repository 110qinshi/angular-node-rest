/**
 * Created by hxl on 2015/10/16.
 */
var http  = require('../../components/http');
var Uris  = require('../../utils/uris');

exports.getActivityList = function(req, res) {
    var activitys = [];
    activitys.push({name:'打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将1',
        leader:'某某某 / 18888888888',num:'2/10',
        startDate:'2015-10-15', endDate:'2015-10-20',status:'1'});

    activitys.push({name:'打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将2',
        leader:'某某某 / 18888888888',num:'2/10',
        startDate:'2015-10-15', endDate:'2015-10-20',status:'1'});

    activitys.push({name:'打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将3',
        leader:'某某某 / 18888888888',num:'2/10',
        startDate:'2015-10-15', endDate:'2015-10-20',status:'1'});

    activitys.push({name:'打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将打麻将4',
        leader:'某某某 / 18888888888',num:'2/10',
        startDate:'2015-10-15', endDate:'2015-10-20',status:'1'});

    res.send(activitys);
}