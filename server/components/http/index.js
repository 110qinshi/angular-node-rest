/**
 * Created by wayky on 15/10/15.
 */
var URL = require("url");
var Underscore = require("underscore");
var Querystring = require("querystring");
var HttpBase    = require('http');
var HttpClient  = require('node-rest-client').Client;
var varicom     = require("../../utils/utils");

var http = {
    OPEN_REST_DOMAIN : "http://openrest.varicom.im",
    httpClient : new HttpClient()
};

http._initReq = function(req) {
    var params = URL.parse(req.url, true).query;
    var _uri = params.uri;
    var _keys = Underscore.keys(params);
    var _params = "";
    if (Underscore.isArray(_keys)) {
        Underscore.each(_keys, function(_key){
            if (_key !== 'uri') {
                if(_params == ""){
                    _params += _key + "=${" + _key + "}";
                }else{
                    _params += "&" + _key + "=${" + _key + "}";
                }
            }
        });
        _params += "&ts=" + (new Date().getTime());
    }
    return {uri:_uri, url: this.OPEN_REST_DOMAIN + _uri + '?' + _params, args: {path: params}};
};

http.postUrlRequest = function(req, callback) {
    var params = this._initReq(req);
    this.httpClient.post(params.url, params.args, function (data) {
        varicom.restlogger.info("%s|post|200|%j|%j", params.uri, params.args, data);
        callback(data);
    });
};

http.getRequest = function(req, callback) {
    var params = this._initReq(req);
    this.httpClient.get(params.url, params.args, function (data) {
        //Todo: maby leak
        varicom.restlogger.info("%s|get|200|%j|%j", params.uri, params.args, data);
        callback(data);
    });
};

http.postFormRequest = function(uri, formPostData, callback) {
    var data = Querystring.stringify(formPostData);
    var options = URL.parse(this.OPEN_REST_DOMAIN + uri);
    options.method = 'POST';
    options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    };

    var _callback = function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            varicom.restlogger.info("%s|form|200|%s|%s", uri, data, str);
            callback(str);
        });
    };

    var req = HttpBase.request(options, _callback);
    //This is the data we are posting, it needs to be a string or a buffer
    req.write(data);
    req.end();
};

module.exports = http;