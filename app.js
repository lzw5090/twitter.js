// const express = require('express')
const app = require("express")();
const volleyball = require('volleyball');
app.use(volleyball);
const nunjucks = require("nunjucks");

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

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
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
  //res.send('This is the news page!');
})

app.get('/special', function(req, res, next){
  res.send('Heyyy, you reached the special area');
});

app.listen(3000, function () {
  console.log('Server Listening');
})
