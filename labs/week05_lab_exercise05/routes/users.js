const express = require('express');
const fs = require('fs');
const routerUser = express.Router();

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
    fs.readFile('./user.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Unable to read user file' });
        }
        res.json(JSON.parse(data));
    });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and password are valid then send response:
    { status: true, message: "User Is valid" }
- If username is invalid:
    { status: false, message: "User Name is invalid" }
- If password is invalid:
    { status: false, message: "Password is invalid" }
*/
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile('./user.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: 'Server Error' });
        }

        const user = JSON.parse(data);

        if (username !== user.username) {
            return res.json({ status: false, message: 'User Name is invalid' });
        } else if (password !== user.password) {
            return res.json({ status: false, message: 'Password is invalid' });
        } else {
            return res.json({ status: true, message: 'User Is valid' });
        }
    });
});

/*
- Modify /logout route to accept username as parameter and display message
  in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req, res) => {
    const username = req.params.username;
    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;
