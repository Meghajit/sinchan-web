var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = "192.168.43.215";
var port = 3000;

var router=express();

router.use(morgan('dev'));






router.get('/', function(req,res,next){

			console.log(req.body);
			res.render('index',{title:"Hey, Meghajit!", message:"Hello there!"});


	});


router.use(express.static(__dirname + '/public'));



module.exports=router;
