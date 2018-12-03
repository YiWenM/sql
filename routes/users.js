var express = require('express');
var router = express.Router();

var userModel = require("../model/user");
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register' });
});

//二级路由 
router.post('/', function(req, res, next) {
  // res.render('register', { title: 'register' });
  console.log(req.body)

  userModel.create({
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	}).then(result=>{
		res.redirect("/login");
	}).catch(error=>{

	})
  
});
module.exports = router;
var express = require('express');
var router = express.Router();

var userModel = require("../model/user");
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register' });
});

//二级路由 
router.post('/login', function(req, res, next) {
  // res.render('register', { title: 'register' });
  console.log(req.body)

  userModel.create({
		username:req.body.username,
		password:req.body.password
	}).then(result=>{
		res.redirect("/login");
	}).catch(error=>{

	})
  
});
module.exports = router;
