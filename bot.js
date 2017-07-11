var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexDL = /^\/DDLL/i; botRegexRules = /^\/ruless/; botDuck = /^\/ducking/;
      botRegexSC = /^\/SDLL/i; botRegexP = /^\/PDLL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/;
      botRegexDraft = /^\/draft/; botRegexCarr = /^\/carr/; botRegexTrade = /^\/trade/; botRegexRookies = /^\/rookies/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; botRegexGH = /^\/ghh/; botRegexDeal = /^\/dealwithit/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/madgms/team/"+request.text.substring(5,8)+"/depthchart");
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
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexDraft.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/MaddenGMs/comments/6mi8hc/2020_live_draft_tracker/");
    this.res.end();
  } 
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://1drv.ms/x/s!AkfwQi26meWD2220qCexElpxVfRh");
    this.res.end();
  } 
  else if(request.text && botRegexRookies.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1qY-WS6wdbsWNPPBumnNU7xHxS1xUABQgxd-PSRu15Mo/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botCarr.test(request.text)) {
    this.res.writeHead(200);
      postMessage("https://i.groupme.com/813x427.jpeg.8d27642537f146fb911d5846bc5dd64b");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/MaddenGMs/comments/5q2h1j/house_rules_for_the_league");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);  
    postMessage("http://www.daddyleagues.com/madgms/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://www.daddyleagues.com/madgms/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  
  else if(request.text && botRegexDeal.test(request.text)) {
    this.res.writeHead(200);
  if(1.0 >= Math.random() > 0.3)
      postMessage("https://heavyeditorial.files.wordpress.com/2014/03/deal-with-it23.gif");
    else
      postMessage("https://heavyeditorial.files.wordpress.com/2014/03/deal-with-it-bra.gif")
    this.res.end();
  }
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/MaddenGMs");
    this.res.end();
  } 
    else if(request.text && botRegexGH.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.gamerhuddle.com/league/madden-gms/");
    this.res.end();
  } 
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
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
