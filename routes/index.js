const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

// router.get('/', function (req, res) {
//   let tweets = tweetBank.list();
//   res.render( 'index', { tweets: tweets } );
// });

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
 // let tweets = tweetBank.list();
  let list = tweetBank.find({name:name});
  res.render( 'index', { list: list } );
});


// router.get('/stylesheets/style.css', function(req, res){
//   res.sendFile('/stylesheets/style.css', {root : __dirname + '/../public/'});
// })



module.exports = router;
