const express = require('express');
const app = express();

app.get(
    '/',
    (req, res) => {
        res.send({
            name: "Chetan"
        });
    }
);

app.listen(5000);