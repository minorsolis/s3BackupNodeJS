// import the stuff
var AWS = require('aws-sdk');
var fs = require('fs');

// setup the config
var config = require('./config/config');
AWS.config.update({ accessKeyId: config.aws_key, secretAccessKey: config.aws_secret });

// read the file
var body = fs.createReadStream(config.file_path);

// get file name
var s3FileName = new Date().toJSON().slice(0,19) + '_' + config.aws_s3_backup_sufix;

// get s3
var s3 = new AWS.S3(); 
var params = {Bucket: config.aws_s3_bucket, Key: s3FileName, Body: body};

s3.putObject(params, function(err, data) {
	if (err){
		console.log(err);
	}else{
		console.log("Uploaded to "+config.aws_s3_bucket+'/'+s3FileName);
	}
});
