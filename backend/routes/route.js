const keys = require('../config/keys');

module.exports = (app) => {
    app.get(
        '/',
        (req, res) => {
            res.send({
                name: "Chetan Janardhana",
                export1: keys.export1
            });
        }
    );
};

