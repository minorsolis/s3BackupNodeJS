// import the stuff
var AWS = require('aws-sdk');
var fs = require('fs');

// setup the config
var config 	= require('./config/config');
var s3Api 	= require('./libs/s3/api');
AWS.config.update({ accessKeyId: config.aws_key, secretAccessKey: config.aws_secret });

// get the action
var action = process.argv[2];
if(action == undefined){ action = "putObject"; }

// do the action
if(action == 'putObject'){
	s3Api.putObject(AWS,fs,config);
}else if(action == 'copyObject'){
	s3Api.copyObject(AWS,fs,config);
}else{
	console.log("Whatcha talkin bout Willis? that function don't exist");
}