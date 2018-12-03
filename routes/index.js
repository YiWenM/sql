var express = require('express');
var router = express.Router();

var userModel = require("../model/user");
router.get('/', function(req, res, next) {

  res.cookie("name","kerwin",{
  	httpOnly:true
  })
  res.render('login', { title: 'login',isShow:false });
}); 

//二级路由 

router.post("/",function(req,res){

	userModel.find({
		username:req.body.username,
		password:req.body.password
	}).then(result=>{
		if(result.length==1){
			//开辟有效存储session 的空间 (1. 内存 2. 存文件 3. 数据库)
			//req.sessions[cookieid]  = {}
			req.session.userInfo= result[0] //有效的信息
			res.redirect("/");
		}else{
			res.render('login', { title: 'login',isShow:true });
		} 
	})
})


module.exports = router;
