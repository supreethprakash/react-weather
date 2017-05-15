var express = require('express');

//Create App

var app = express();
app.use(express.static('public'));
app.listen(3000, function(){
  console.log('Express folder up and running at port 3000');
});
