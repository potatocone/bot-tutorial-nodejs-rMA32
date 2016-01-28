var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/coolguy/; botDuck = /^\/ducking/; botRegexstaymaj = /^\/staymaj/; 
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/320x180.gif.53776560c9984fd59608c337274b0ff8");
    else
      postMessage("https://i.groupme.com/480x360.gif.6baceb3ecda143918edb0fc35b036b46");
    this.res.end();
  }
  else if(request.text && botRegexStayMaj.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    else if(Math.random() >0.75)
      postMessage("https://i.groupme.com/920x701.jpeg.5f98e28dab5a4b7ca34696bd637869b9");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
function postMessage(response) {
  var botResponse,options, body, botReq;
  botResponse = response
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };
  body = {
    "bot_id" : botID,
    "text" : botResponse
  };
  console.log('sending ' + botResponse + ' to ' + botID);
  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });
  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
exports.respond = respond;
