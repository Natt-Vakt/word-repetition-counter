# word-repetition-counter
A simple node.js application to count word repetition in a string

To install simply run the INSTALL.BAT
To start the server simply run the START.BAT

This program responds to posts with plain text in their body. send it to http://localhost:3000/count
formating should be something like this:
curl -H "Content-type: text/plain" -X "POST" -d "TEXT HERE" http://localhost:3000/count
