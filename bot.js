import java.util.Random;
var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexTits = /^\/tits/; botRegexBoobs = /^\/boobs/; botRegexBoobies = /^\/boobies/; 

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexTits.test(request.text)) {
    this.res.writeHead(200);
    double randomNumber = Math.random();
    boolean isTails = randomNumber > .5;
    if (isTails)
      postMessage("http://i.imgur.com/F2vcuNf.jpg");
    else 
      postMessage("http://i.imgur.com/0RE6wLK.jpg"); 
    this.res.end();
  }
  else if(request.text && botRegexBoobs.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() > 0.4)
      postMessage("http://i.imgur.com/znjGVxG.jpg");
    else
      postMessage("http://i.imgur.com/zA5taR3.jpg");
    this.res.end();
  }  
  else if(request.text && botRegexBoobies.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() > 0.4)
      postmessage("http://i.imgur.com/G5DkpRH.jpg");
    else 
      postmessage("http://i.imgur.com/wnunRus.jpg");
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
