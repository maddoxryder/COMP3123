const express = require('express');
const router = express.Router();
const empController = require('../controllers/employeeController');
const { employeeCreateRules, employeeUpdateRules } = require('../middleware/validators');

// GET all employees
router.get('/employees', empController.getAll); // 200

// Create employee
router.post('/employees', employeeCreateRules, empController.create); // 201

// Get employee by id
router.get('/employees/:eid', empController.getById); // 200

// Update employee
router.put('/employees/:eid', employeeUpdateRules, empController.update); // 200

// Delete using query param ?eid=xxx
router.delete('/employees', empController.deleteByQuery); // 204

module.exports = router;
