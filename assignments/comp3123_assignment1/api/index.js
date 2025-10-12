const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const userRoutes = require("../routes/user");
const employeeRoutes = require("../routes/emp");
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/emp", employeeRoutes);

const Employee = require("../models/Employee"); // adjust path if needed

async function seedEmployees() {
    try {
        const count = await Employee.countDocuments();
        if (count === 0) {
            await Employee.insertMany([
                {
                    first_name: "Jane",
                    last_name: "Doe",
                    email: "jane.doe@example.com",
                    position: "Software Engineer",
                    salary: 90000,
                    date_of_joining: new Date("2023-08-01T00:00:00.000Z"),
                    department: "Engineering",
                    created_at: new Date()
                },
                {
                    first_name: "John",
                    last_name: "Smith",
                    email: "john.smith@example.com",
                    position: "Product Manager",
                    salary: 110000,
                    date_of_joining: new Date("2023-07-15T00:00:00.000Z"),
                    department: "Product",
                    created_at: new Date()
                }
            ]);
            console.log("✅ Preloaded employees");
        } else {
            console.log(`Employees already exist (${count}) — skipping seed.`);
        }
    } catch (err) {
        console.error("❌ Error seeding employees:", err);
    }
}

// MongoDB connection
mongoose.connect(
    "mongodb+srv://maddoxduggan_db_user:Pq3c4O9d14dQBNcM@labcluster.uses5wv.mongodb.net/?retryWrites=true&w=majority&appName=LabCluster\n"
)
    .then(async () => {
        console.log("✅ MongoDB connected");
        await seedEmployees(); // seed after DB is ready
    })
    .catch(err => console.error("❌ DB connection error:", err));

// Only listen if running locally (not on Vercel)
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

// Example route
app.get("/", (req, res) => {
    res.json({ message: "API running on Vercel!" });
});

module.exports = app;
