const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');

exports.getAll = async (req, res) => {
    try {
        const emps = await Employee.find().sort({ created_at: -1 });
        const out = emps.map(e => ({
            employee_id: e._id.toString(),
            first_name: e.first_name,
            last_name: e.last_name,
            email: e.email,
            position: e.position,
            salary: e.salary,
            date_of_joining: e.date_of_joining,
            department: e.department
        }));
        return res.status(200).json(out);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ status: false, errors: errors.array() });

    try {
        const doc = new Employee(req.body);
        await doc.save();
        return res.status(201).json({ message: 'Employee created successfully.', employee_id: doc._id.toString() });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};

exports.getById = async (req, res) => {
    try {
        const { eid } = req.params;
        const e = await Employee.findById(eid);
        if (!e) return res.status(404).json({ status: false, message: 'Employee not found' });
        return res.status(200).json({
            employee_id: e._id.toString(),
            first_name: e.first_name,
            last_name: e.last_name,
            email: e.email,
            position: e.position,
            salary: e.salary,
            date_of_joining: e.date_of_joining,
            department: e.department
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};

exports.update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ status: false, errors: errors.array() });

    try {
        const { eid } = req.params;
        const updated = await Employee.findByIdAndUpdate(eid, req.body, { new: true });
        if (!updated) return res.status(404).json({ status: false, message: 'Employee not found' });
        return res.status(200).json({ message: 'Employee details updated successfully.' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};

exports.deleteByQuery = async (req, res) => {
    try {
        const eid = req.query.eid;
        if (!eid) return res.status(400).json({ status: false, message: 'Missing eid query parameter' });

        const deleted = await Employee.findByIdAndDelete(eid);
        if (!deleted) return res.status(404).json({ status: false, message: 'Employee not found' });

        // assignment expects 204 for successful delete and a sample message in docs.
        // We'll return 204 with no body to strictly follow spec.
        return res.status(204).send();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};
