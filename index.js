var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index.pug')
})

app.get('index', function(req, res) {
  console.log("ok");
  res.render('index.pug')
})

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
