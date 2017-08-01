// const express = require('express')
const app = require("express")();
const volleyball = require('volleyball');
app.use(volleyball);

app.use('/', function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // console.log(Object.keys(req));
    console.log(req.method, req.url, res.statusCode);
    next();
})

app.use('/special', function(req, res, next){
  console.log('You reached the special area');
  next();
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/news', function(req, res){
  res.send('This is the news page!');
})

app.get('/special', function(req, res, next){
  res.send('Heyyy, you reached the special area');
});

app.listen(3000, function () {
  console.log('Server Listening');
})
