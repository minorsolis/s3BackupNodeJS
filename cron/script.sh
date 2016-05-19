echo "Add the bash code here"

echo "..........................."
echo "What about mongo dump?"
echo "then, tar -cvf dump.tar dump"
echo "and finally mv dump.tar ../data/ (make sure you put the right path in the config.js)"
echo "..........................."

echo "Finally exec nodejs"
cd ../app/
node index.js
