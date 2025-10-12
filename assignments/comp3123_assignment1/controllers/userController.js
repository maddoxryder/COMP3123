const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ status: false, errors: errors.array() });

    try {
        const { username, email, password } = req.body;
        // check existing
        const existing = await User.findOne({ $or: [{ email }, { username }] });
        if (existing) return res.status(400).json({ status: false, message: 'Username or email already exists' });

        const hashed = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashed });
        await user.save();
        return res.status(201).json({ message: 'User created successfully.', user_id: user._id.toString() });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ status: false, errors: errors.array() });

    try {
        const { email, username, password } = req.body;
        if (!password || (!email && !username)) {
            return res.status(400).json({ status: false, message: 'Provide username or email and password' });
        }

        const user = await User.findOne(email ? { email } : { username });
        if (!user) return res.status(400).json({ status: false, message: 'Invalid Username and password' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ status: false, message: 'Invalid Username and password' });

        // optional JWT
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        return res.status(200).json({ message: 'Login successful.', jwt_token: token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Server error' });
    }
};
