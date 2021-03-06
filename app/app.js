const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth/routes');
const todolistRoutes = require('./todolist/routes');


const app = express();
app.use(bodyParser.json());
app.use('/api/', authRoutes);
app.use('/api/', todolistRoutes);

app.listen(3000);
