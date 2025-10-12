const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { userSignupRules, userLoginRules } = require('../middleware/validators');

router.post('/signup', userSignupRules, userController.signup); // 201
router.post('/login', userLoginRules, userController.login);   // 200

module.exports = router;
