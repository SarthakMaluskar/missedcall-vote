const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/webhook/call", (req, res) => {

    console.log("FULL QUERY:", req.query);

    console.log("Caller Number:", req.query.CallFrom);

    return res.sendStatus(200);
});

app.get("/webhook/call", (req, res) => {

    console.log("FULL QUERY:", req.query);

    console.log("Caller Number:", req.query.CallFrom);

    return res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});