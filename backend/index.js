const express = require('express');
const app = express();
const keys = require('./config/keys');

app.get(
    '/',
    (req, res) => {
        res.send({
            name: "Chetan Janardhana",
            export1: keys.export1
        });
    }
);

app.listen(5000);