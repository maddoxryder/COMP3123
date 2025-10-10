const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes.js');

// MongoDB Atlas connection string (replace with yours)
const DB_URL = process.env.DB_URL || "mongodb+srv://maddoxduggan_db_user:Pq3c4O9d14dQBNcM@labcluster.uses5wv.mongodb.net/?retryWrites=true&w=majority&appName=LabCluster";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note Taking Application - Week06 Exercise</h1>");
});

// Use note routes
app.use('/api', noteRoutes);

// Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas Server");
    app.listen(PORT, () => {
        console.log(`🚀 Server is listening on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.log('❌ Could not connect to the database. Exiting now...', err);
    process.exit();
});
