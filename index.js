const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'))
});

app.post('/dizOi', function (req, res) {
const name = req.body.firstName;

res.send("Olá " + name + "! 🦀");
});


app.listen(port, () => {
    console.log('listening on port ' + port)
})

//docker build -t dizoi .
//docker run --publish 3000:3000 dizoi