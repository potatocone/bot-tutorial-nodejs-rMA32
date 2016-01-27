var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; 
      botRegexDL = /^\/DDL/i;
      botRegexSalt = /^\/salt/;
      botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/; 
      botRegexSC = /^\/SDL/i; 
      botODB = /(.*\s+)(.*odb)(\s+.*)/i; 
      botDucking = /^\/ducking/; 
      botRegexP = /^\/PDL/i;  
      botRegexTw = /^\/twitch/i; 
      botRegexSb = /^\/sub/; 
      botRegexSh = /^\/shrug/; 
      botRegexWk = /^\/users/; 
      botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; 
      botRegexTits = /^\/tits/; 
      botRegexStayMaj = /^\/StayMaj/; 
      botRegexstaymaj = /^\/staymaj/; 
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
    postMessage("http://daddyleagues.com/ptp/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    if(0.8 >= Math.random() > 0.6)
      postMessage("http://www.kappit.com/img/pics/201503_1020_iceia_sm.jpg");
    else if(Math.random() >0.8)
      postMessage("http://www.kappit.com/img/pics/201503_1020_dgcga_sm.jpg")
    else
      postMessage("http://i.imgur.com/Bnw1iln.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptp/rules");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptp/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/ptp/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/nsfw");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDucking.test(request.text)) {
    this.res.writeHead(200);
   if(0.6 >= Math.random() > 0.3)
      postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/320x180.gif.53776560c9984fd59608c337274b0ff8")
    else
      postMessage("https://i.groupme.com/480x360.gif.6baceb3ecda143918edb0fc35b036b46");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexTits.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/MiSoSWp.jpg");
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
    else if(request.text && botRegexstaymaj.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    else if(Math.random() >0.75)
      postMessage("https://i.groupme.com/920x701.jpeg.5f98e28dab5a4b7ca34696bd637869b9");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7")
    else
      postMessage("https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd");
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
