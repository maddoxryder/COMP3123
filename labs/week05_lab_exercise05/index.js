const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/users');

// Middleware for JSON request body
app.use(express.json());


app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

// Dynamic port binding
const PORT = process.env.port || 8081;
app.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}`);
});
