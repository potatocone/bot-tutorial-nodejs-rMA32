var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexDL = /^\/DDL/i; botRegexSalt = /^\/salt/; botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/; botRegexSC = /^\/SDL/i; botDuck = /^\/duck/; botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; 
      botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexTits = /^\/tits/; botRegexcheese = /^\/cheese/; botRegexStayMaj = /^\/staymaj/; 
      botRegexmaj = /^\/stay maj/; botRegexBeatit = /^\/beatit/;
 
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
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/ptp/rules");
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
  
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
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

  else if(request.text && botRegexcheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/500x477.png.51b13f3706b9414c85ad831ae4352361");
    else if(Math.random() >0.75)
      postMessage("https://i.groupme.com/400x400.gif.88ed0db90e6a4bfd937588d3ac09e66d");
    else
      postMessage("http://cdn.makeagif.com/media/1-24-2014/zaAiBl.gif");
    this.res.end();
  }
  
  else if(request.text && botRegexTits.test(request.text)) {
    this.res.writeHead(200);
    var x;
    x = Math.random()
    if(x >= 0.9)
      postMessage("http://i.imgur.com/kSadnk8.jpg");
    else if(x >= 0.8)
      postMessage("http://i.imgur.com/4JCb63o.jpg");
    else if(x >= 0.7)
      postMessage("http://i.imgur.com/F2vcuNf.jpg");
    else if(x >= 0.6)
      postMessage("http://i.imgur.com/0RE6wLK.jpg"); 
    else if(x >= 0.5)
      postMessage("http://i.imgur.com/znjGVxG.jpg");
    else if(x >= 0.4)
      postMessage("http://i.imgur.com/zA5taR3.jpg");
    else if(x >= 0.3)
      postmessage("http://i.imgur.com/G5DkpRH.jpg");
    else
      postmessage("http://i.imgur.com/wnunRus.jpg");
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
  
  else if(request.text && botRegexBeat.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("https://i.groupme.com/288x222.gif.c6d8b33d0d464e8e94891ade7d594b82");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/477x241.gif.39d609b4236246b8b78c75325438e385")
    else
      postMessage("https://i.groupme.com/320x240.gif.b46b820b6e9d4de0be8fb90aeee42ff2");
    this.res.end();
  }
  
  else if(request.text && botRegexmaj.test(request.text)) {
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
