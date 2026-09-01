import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const users = [
    {
        id: 1,
        name: "Nitesh Kumar",
        email: "nitesh@gmail.com",
        password: "nitesh123"
    },
    {
        id: 2,
        name: "Aman",
        email: "aman@gmail.com",
        password: "aman123"
    }
];

const events = [
    {
        id: 1,
        event: "Birthday Party",
        location: "Delhi",
        date: "20/12/2024",
        description: "Birthday party of Aman"
    },
    {
        id: 2,
        event: "Wedding",
        location: "Mumbai",
        date: "10/01/2025",
        description: "Wedding of Ram"
    },
    {
        id: 3,
        event: "Birthday Party",
        location: "Goa",
        date: "08/07/2026",
        description: "Birthday party of React.js"
    },
    {
        id: 4,
        event: "Birthday Party",
        location: "Delhi",
        date: "20/12/2024",
        description: "Birthday party of rahul"
    }
];

app.get("/", (req, res) => {
    res.json({
        message: "Server is working fine"
    });
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/events", (req, res) => {
    res.json(events)
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    const user = users.find((user) => user.email === email);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    if (user.password !== password) {
        return res.status(401).json({
            success: false,
            message: "Wrong password"
        });
    }

    
});

app.post("/addevent", (req, res) => {
    const { event, location, date, description } = req.body;

    if (!event || !location || !date || !description) {
        return res.status(400).json({
            success: false,
            message: "All event fields are required"
        });
    }

    const newEvent = {
        id: events.length + 1,
        event,
        location,
        date,
        description
    };

    events.push(newEvent);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});