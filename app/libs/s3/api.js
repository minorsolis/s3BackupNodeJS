module.exports = {
	putObject:function(AWS,fs,config){
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
		},
	copyObject:function(AWS,fs,config){

process.exit();

			// get file name
			var s3FileName = new Date().toJSON().slice(0,19) + '_images';
			var from = config.aws_s3_copy_from+'/images/cr.jpg';
			var to = s3FileName;

			// get s3
			var s3 = new AWS.S3(); 
			var params = {Bucket: config.aws_s3_copy_to, Key: to, CopySource: from };

			s3.copyObject(params, function(err, data) {
				if (err){
					console.log(err);
				}else{
					console.log("Copied to "+config.aws_s3_copy_to+'/'+s3FileName);
				}
			});


	}
};
