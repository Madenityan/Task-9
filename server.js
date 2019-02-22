const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.listen(3000);

app.get('/todolist', function (req, res) {
  let data = fs.readFileSync('data.json', 'utf8');
  res.json(JSON.parse(data));
});

app.post('/create', function (req, res) {
  const json = {
    id: '5c2e8c94fb6fc02c41a54ec3',
    userId: 'eyJhbGciOiJIUzI1NiJ9',
    title: 'RRRRRR',
    description: 'WWWWWW',
    status: 'new',
    selected: false
  };
  let data = fs.readFileSync('data.json', 'utf8');
  let jsonData = JSON.parse(data);
  jsonData.push(json);
  let writer = fs.writeFileSync('data.json', JSON.stringify(jsonData),'utf-8');
  res.send(json);
});

app.put('/update', function (req, res) {

});

