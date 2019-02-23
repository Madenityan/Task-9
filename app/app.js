const express = require('express');
const bodyParser = require('body-parser');
const registrationRoutes = require('./registration/routes');
const todolistRoutes = require('./todolist/routes');


const app = express();
app.use(bodyParser.json());
app.use('/api/', registrationRoutes);
app.use('/api/', todolistRoutes);

app.listen(3000);
