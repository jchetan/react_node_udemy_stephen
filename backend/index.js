const express = require('express');
const routes = require('./routes/route');
const app = express();

routes(app);

app.listen(5000);