var path = require('path');
var express = require('express');
var app = express();
var sass = require('node-sass-middleware');
app.use(sass({
  src: path.join(__dirname,'/sass'),
  dest: __dirname,
  debug: true
}));

app.use(express.static(__dirname));

app.listen(3000,function(){console.log('port 3000');});


