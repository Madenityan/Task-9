const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000);

app.get('/todolist', function (req, res) {
  let data = fs.readFileSync('data.json', 'utf8');
  res.json(JSON.parse(data));
});

app.post('/create', function (req, res) {
  let body = req.body;
  let data = fs.readFileSync('data.json', 'utf8');
  let jsonData = JSON.parse(data);
  jsonData.push(body);
  let writer = fs.writeFileSync('data.json', JSON.stringify(jsonData),'utf-8');
  res.send(body);
});

app.put('/update/:id', function (req, res) {
  let data = fs.readFileSync('data.json', 'utf8');
  let jsonData = JSON.parse(data);
  let body = req.body;
  let isFound = false;

  let id = req.params.id;
  jsonData.forEach(function(element, index, arr) {
    if (element._id === id) {
      arr[index] = body;
      isFound = true;
    }
  });
  if (isFound) {
   fs.writeFileSync('data.json', JSON.stringify(jsonData),'utf-8');
   return res.send(jsonData);
  }
  return res.status(404).end();
});
