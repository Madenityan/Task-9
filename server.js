let express = require('express');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
let app = express();

app.listen(3000);

app.get('/todolist', function(req, res) {
    let data =  fs.readFileSync('data.json', 'utf8');
    res.json(JSON.parse(data));
});

app.post('/create', function (req, res) {

});

