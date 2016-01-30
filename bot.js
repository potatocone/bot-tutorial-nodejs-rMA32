var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexTits = /^\/tits/; botRegexjres = /^\/jres/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexTits.test(request.text)) {
    this.res.writeHead(200);
    var number = Math.random();
    if (number > 0.85)
      postMessage("http://i.imgur.com/F2vcuNf.jpg");
    else if (number > 0.70 && number <= 0.85)  
      postMessage("http://i.imgur.com/znjGVxG.jpg");
    else if (number > 0.55 && number <= 0.70) 
      postMessage("http://i.imgur.com/zA5taR3.jpg");
    else if (number > 0.40 && number <= 0.55)
      postmessage("http://i.imgur.com/G5DkpRH.jpg");
    else if (number > 0.25 && number <= 0.40)
      postmessage("http://i.imgur.com/wnunRus.jpg");
    else 
      postMessage("http://i.imgur.com/0RE6wLK.jpg"); 
    this.res.end();
  }
  else if(request.text && botRegexjres.test(request.text)) {
    this.res.writeHead(200);
    if (Math.random() > 0.50)
      postmessage("http://i.imgur.com/S4RpEoQ.png");
    else 
      postMessage("http://i.imgur.com/jti4RUU.png"); 
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


exports.respond = respond;
