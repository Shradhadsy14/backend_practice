import express from 'express';

const app = express();

// test route
app.get("/", (req, res) => {
    res.send("Server is ready");
});

// ✅ MUST MATCH FRONTEND
app.get("/api/jokes", (req, res) => {
    const jokes = [
        { id: 1, setup: "What do you call a bear with no teeth?", punchline: "A gummy bear." },
        { id: 2, setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything." },
        { id: 3, setup: "What do you call fake spaghetti?", punchline: "An impasta." }
    ];

    res.json(jokes);
});

// ✅ FIX PORT
const port = 5000;

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});