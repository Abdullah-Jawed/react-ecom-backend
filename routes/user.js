const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Jwt = require('jsonwebtoken');

router.post('/register', async function (req, res) {
    try {
        const user = new User(req.body);
        let result = await user.save();
        Jwt.sign({ result }, process.env.jwtSecret, (err, token) => {
            res.status(200).send({ auth: token });
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });   
    }
});

router.post('/login', async function (req, res) {
    try {
        let username = req.body.username;
        let IfUser = await User.findOne({ username }).lean();
        if (IfUser && IfUser.password == req.body.password) {
            delete IfUser.password;
            Jwt.sign({ IfUser }, process.env.jwtSecret, (err, token) => {
                res.status(200).send({ auth: token });
            });
        }
        else {
            var message = (IfUser) ? "Incorrect Password" : "Username Not Found";
            res.status(500).json({ message: message });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;