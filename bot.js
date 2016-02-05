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
    if (number > 0.80)
      postMessage("https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12556153_1572118576413388_1494898369_n.jpg");
    else if (number > 0.55)  
      postMessage("https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12558547_164010630637785_507904610_n.jpg");
    else if (number > 0.40)
      postmessage("https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/928507_601374456681782_740746957_n.jpg");
    else if (number > 0.25)
      postmessage("http://i.imgur.com/wnunRus.jpg");
    else 
      postMessage("http://i.imgur.com/0RE6wLK.jpg"); 
    this.res.end();
  }
  else if(request.text && botRegexjres.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() > 0.4)
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
