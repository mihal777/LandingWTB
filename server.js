var express = require('express');
var packageInfo = require('./package.json');
var app = express();

app.use('/', express.static(__dirname + '/www'));




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = 3000;

  console.log('Web server started at http://%s:%s', host, port);
});



const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body.user.name);
    for(var id_v of id_arr){
      bot.sendMessage(id_v, `Name:${req.body.user.name}, number:${req.body.user.email}`);
    }
    
});


var id_arr=[]

var token = 'NONE';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');



bot.onText(/^\/log_in (.+)$/, function (msg, match) {
  var password = match[1];
  const chatId = msg.chat.id;
  if(password === "hardpassword"){
    bot.sendMessage(msg.chat.id, "Success. Now you will be receive feedbacks from web page.").then(function () {
      id_arr.push(chatId);
    });
  }
});
