/**
 * Created by wayky on 15/9/20.
 */
var http = require("../../components/http");
var Uris = require("../../utils/uris");

//登录
exports.login = function(req, res) {
  /*
  http.postFormRequest(Uris.OPEN_USER_LOGIN, req.body, function(data){
    res.send(data);
  });
  */
  res.send({code:0});
};