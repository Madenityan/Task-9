const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/login',function (req, res) {
  let body = req.body;
  let data = fs.readFileSync('app/data/auth.json', 'utf8');
  let authData = JSON.parse(data);
  if ((authData.password === body.password) && authData.name === body.name) {
    return res.send(authData.token)
  }
  return res.status(400).send('Bad Request');
});

module.exports = router;