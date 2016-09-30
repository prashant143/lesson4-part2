var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',message: 'Prashant Vaghela' });

});
// GET another number page

router.get('/random',function (req,res,next) {
  //calculate a random number
  var randomNumber = Math.random();

  //load the view and pass the title and number

  res.render('random' , { title: 'Random Number', randomNumber: randomNumber});

})
module.exports = router;
