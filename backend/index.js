const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
require('./models/User');
const routes = require('./routes/route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'asjhdfsdfads'
}));

mongoose.connect('mongodb://mongodb:27017');

routes(app);

app.listen(5000);