// import the stuff
var AWS = require('aws-sdk');
var fs = require('fs');

// setup the config
var config 	= require('./config/config');
var s3Api 	= require('./libs/s3/api');
AWS.config.update({ accessKeyId: config.aws_key, secretAccessKey: config.aws_secret });

s3Api.putObject(AWS,fs,config);