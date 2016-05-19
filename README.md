# AWS S3 Simple File Backups w/ NodeJs
This is just a simple nodejs script to allow you make automatic backups in S3. We will use it to backup a mongoDb database.

## Requirements
1. Nodejs
2. AWS API Credentials

## Installation
#### #1 Clone this repository
```
git clone: https://github.com/minorsolis/s3BackupNodeJS.git
cd s3BackupNodeJS
```
#### #2 Go inside the app/config folder
```
cd app/config/
```

#### #3 Create your own config.js
```
cp -rp config.example.js config.js
```
#### #4 Add your credentials and configuration
```
  aws_key: 'aws_key_here',
  aws_secret: 'aws_secret_here',
  aws_s3_bucket: 'aws_s3_bucket',
  file_path: '/path_to_your_file/'
```
## Optional
The folder includes a cron folder with a bit of bash code, just in case you need to extend this app.
```
open => cron/script.sh
```
It will show something like this
```
echo "Add the bash code here"

echo "..........................."
echo "cd /your_config_file_path/ && mongodump"
echo "tar -cvf dump.tar dump"
echo "..........................."

echo "Finally exec nodejs"
cd ../app/
node index.js
```

