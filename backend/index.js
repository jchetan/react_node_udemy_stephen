const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('./models/User');

app.use(cors());

app.use(bodyParser.json());

const routes = require('./routes/route');

mongoose.connect('mongodb://mongodb:27017');

routes(app);

app.listen(5000);