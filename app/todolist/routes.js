const express = require('express');
const router = express.Router();
const fs = require('fs');

const pathList = 'app/data/todolist.json';

router.get('/todolist', function (req, res) {
  let data = fs.readFileSync(pathList, 'utf8');
  res.json(JSON.parse(data));
});

router.post('/create', function (req, res) {
  let body = req.body;
  let data = fs.readFileSync(pathList, 'utf8');
  let jsonData = JSON.parse(data);
  jsonData.push(body);
  let writer = fs.writeFileSync(pathList, JSON.stringify(jsonData),'utf-8');
  res.send(body);
});

router.put('/update/:id', function (req, res) {
  let data = fs.readFileSync(pathList, 'utf8');
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
    fs.writeFileSync(pathList, JSON.stringify(jsonData),'utf-8');
    return res.send(body);
  }
  return res.status(404).end();
});

router.delete('/delete/:id', function (req,res) {
  let data = fs.readFileSync(pathList, 'utf8');
  let jsonData = JSON.parse(data);
  let body = req.body;
  let isFound = false;

  let id = req.params.id;
  jsonData.forEach(function(element, index, arr) {
    if (element._id === id) {
      arr.splice(index, 1);
      isFound = true;
    }
  });
  if (isFound) {
    fs.writeFileSync(pathList, JSON.stringify(jsonData),'utf-8');
    return res.send();
  }
  return res.status(404).end();
});

module.exports = router;