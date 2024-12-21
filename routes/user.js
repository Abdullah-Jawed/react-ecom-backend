const express = require('express');
const authcontroller = require('../controllers/auth-controller');
const router = express.Router();
const signupSchema = require('../validators/auth-validator');
const validate = require('../middlewares/validator-middleware');


router.post('/register', validate(signupSchema), authcontroller.register);

router.post('/login', authcontroller.login);




module.exports = router;