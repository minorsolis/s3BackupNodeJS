echo "Add the bash code here"

echo "..........................."
echo "cd /your_config_file_path/ && mongodump"
echo "tar -cvf dump.tar dump"
echo "..........................."

echo "Finally exec nodejs"
cd ../app/
node index.js
