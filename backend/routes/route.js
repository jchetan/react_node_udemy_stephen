const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

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

    app.post(
        '/signup',
        async (req, res) => {
            const { login, name } = req.body;
            const existingUser = await User.findOne({ login: login });
            if (existingUser) {
                res.status(200).json({ status: "User already exists" });
            }
            else {
                try {
                    const user = await User.create({ login: login, name: name });
                    res.status(200).json(user);
                    // new User({login: login, name: name}).save();
                    // res.status(200).json({status: "Success"});
                } catch (error) {
                    res.status(400).json({ status: "Error" });
                }
            }
        }
    );

    app.post(
        '/login',
        async (req, res) => {
            const { login } = req.body;
            const existingUser = await User.findOne({ login: login });
            if (existingUser) {
                res.status(200).json({ status: "Login successful" });
            }
            else {
                res.status(200).json({ status: "User does not exist" });
            }
        }
    );
};

