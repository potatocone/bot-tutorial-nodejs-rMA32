var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/coolguy/; botDuck = /^\/ducking/; botRegexstaymaj = /^\/staymaj/; botRegexmaj = /^\/maj/; botRegexethan = /^\/ethan/;
      botRegexdaddy = /^\/call me daddy/; botRegexjose = /^\/jose's girl/; botRegexgkys = /^\/gkys/; botRegexDeals = /^\/dealwithit/;
      botRegexDeal = /^\/booties/; botRegexBeatit = /^\/beatit/; botRegexboobs = /^\/boobies/;
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    if(1.0 >= Math.random() >0.4)
      postMessage("https://i.groupme.com/320x180.gif.53776560c9984fd59608c337274b0ff8");
    else
      postMessage("https://i.groupme.com/480x360.gif.6baceb3ecda143918edb0fc35b036b46");
    this.res.end();
  }
  else if(request.text && botRegexstaymaj.test(request.text)) {
    this.res.writeHead(200);
    if(1.0 >= Math.random() > 0.4)
      postMessage("https://i.groupme.com/920x701.jpeg.5f98e28dab5a4b7ca34696bd637869b9");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else if(request.text && botRegexmaj.test(request.text)) {
    this.res.writeHead(200);
    if(1.0 >= Math.random() > 0.4)
      postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else if(request.text && botRegexethan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1609x2250.jpeg.0ff61195e1ac46cfa9e42c748d434a02");
    this.res.end();
  }
  else if(request.text && botRegexdaddy.test(request.text)) {
    this.res.writeHead(200);
    if(1.0 >= Math.random() >0.4)
      postMessage("https://upload.wikimedia.org/wikipedia/commons/f/f8/Tiger_Woods_drives_by_Allison.jpg");
    else
      postMessage("http://i.telegraph.co.uk/multimedia/archive/02265/tiger-woods_2265368b.jpg");
    this.res.end();
  }
  else if(request.text && botRegexjose.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/236x316.jpeg.cded5dc6c9524c68b08461720f481a00");
    this.res.end();
  }
  else if(request.text && botRegexgkys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/250x188.gif.023685f596164cbc96e9c78ee7c2eb3c");
    this.res.end();
  }
  else if(request.text && botRegexboobs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/912x1620.jpeg.060ab9f348094bb491b1ccf281ca16f6");
    this.res.end();
  }
  else if(request.text && botRegexDeals.test(request.text)) {
    this.res.writeHead(200);
    if(1.0 >= Math.random() > 0.3)
      postMessage("https://i.imgur.com/C9aUdh.jpg");
    else
      postMessage("https://heavyeditorial.files.wordpress.com/2014/03/jackson.gif?w=500");
    this.res.end();
  }
  else if(request.text && botRegexDeal.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/720x960.jpeg.08ff546b53904b6db15bc2c08a5f1f80");
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
