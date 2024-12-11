const Jwt = require('jsonwebtoken');
const User = require('../models/user');


const login = async (req, res) => {
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
}

const register = async (req, res) => {
    try {
        const userExits = await User.findOne({ email: req.body.email });
        if (userExits) {
            return res.status(400).json({ message: [{ path: ['email'], message: "Email already exists" }] });
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
}

module.exports = { login, register }