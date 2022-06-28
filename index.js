const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.text());

app.post("/count", (req, res) => {
    var word = req.body.split(' '); //splits the input string into seperate words
    var output = {};

    word.sort(); //alfabetical sort

    for(var i = 0; i < word.length; i++) //counts the now split string and makes them all lowercase
    output[word[i].toLowerCase()] = (output[word[i].toLowerCase()] || 0) + 1;

    output = Object.entries(output).sort((a,b) => b[1]-a[1]); //value sort

    output = output.slice(0, 9); //removes anything after the 10 largest words

    res.send(output); //sends back the now counted string
});

app.listen(PORT, () => {
    console.log(`Active on ${PORT}`);
})