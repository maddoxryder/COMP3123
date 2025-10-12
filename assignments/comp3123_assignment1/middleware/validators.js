const { body } = require('express-validator');

const userSignupRules = [
    body('username').isString().isLength({ min: 3 }).withMessage('username must be at least 3 chars'),
    body('email').isEmail().withMessage('valid email required'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 chars')
];

const userLoginRules = [
    body('password').exists(),
    body('email').optional().isEmail(),
    body('username').optional().isString()
];

const employeeCreateRules = [
    body('first_name').isString().notEmpty(),
    body('last_name').isString().notEmpty(),
    body('email').isEmail(),
    body('position').isString().notEmpty(),
    body('salary').isNumeric(),
    body('date_of_joining').isISO8601().toDate(),
    body('department').isString().notEmpty()
];

const employeeUpdateRules = [
    // optional fields but validate if present
    body('email').optional().isEmail(),
    body('salary').optional().isNumeric(),
    body('date_of_joining').optional().isISO8601().toDate()
];

module.exports = {
    userSignupRules,
    userLoginRules,
    employeeCreateRules,
    employeeUpdateRules
};
