
var http = require('http');

//  Endpoints
var HOST_ENDPOINT = 'api.pushetta.com';
  
var Pushetta = function(apikey) {
  this.apikey = apikey;
}

Pushetta.prototype.pushMessage = function(channelName, message, callback) {
  var postData ={
      "body": message,
      "message_type": "text/plain"
  };
  var postdataString = JSON.stringify(postData);

  console.log("api key : "  + this.apikey);
  var headers = {
    'Content-Type': 'application/json',
    'Content-Length': postdataString.length,
    'Authorization': 'Token ' + this.apikey
    };

  var options = {
    host: HOST_ENDPOINT,
    port: 80,
    path: ["/api/pushes/", channelName, "/"].join(""),
    method: 'POST',
    headers: headers
  };
  
  var req = http.request(options, function(res) {
    res.on('end', function() {
      console.log("END");
      callback(true);
    });
  });

  req.write(postdataString);
  req.end();
}

module.exports = Pushetta
