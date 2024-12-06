const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Jwt = require('jsonwebtoken');
const signupSchema = require('../validators/auth-validator');
const validate = require('../middlewares/validator-middleware');


router.post('/register',validate(signupSchema), async function (req, res) {
    try {
        const userExits = await User.findOne({email: req.body.email});
        if(userExits){
            return res.status(400).json({ message: "email already exists" });
        }
        const user = new User(req.body);
        let result = await user.save();

        const sendData = result.toObject();
        delete sendData.password;
        Jwt.sign({ sendData }, process.env.jwtSecret, (err, token) => {
            res.status(200).json({ auth: token, message: "User created successfully" });
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });   
    }
});

router.post('/login', async function (req, res) {
    try {
        let email = req.body.email;
        let IfUser = await User.findOne({ email }).lean();
        if (IfUser && IfUser.password == req.body.password) {
            delete IfUser.password;
            Jwt.sign({ IfUser }, process.env.jwtSecret, (err, token) => {
                res.status(200).send({ message: "Logged in Successfuly", auth: token });
            });
        }
        else {
            var message = (IfUser) ? "Incorrect Password" : "Email Not Found";
            res.status(400).json({ message: message });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;