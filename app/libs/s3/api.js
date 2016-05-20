module.exports = {
	putObject:function(AWS,fs,config){
			
			var param1 = process.argv[2];
			var param2 = process.argv[3];

			if(param1 == undefined){
				param1 	= config.file_path;
			}

			if(param2 == undefined){
				param2 	= config.aws_s3_backup_sufix;
			}

			// read the file
			var body = fs.createReadStream(param1);

			// get file name
			var s3FileName = new Date().toJSON().slice(0,19) + '_' + param2;

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
