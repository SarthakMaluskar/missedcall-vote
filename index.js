const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/webhook/call", (req, res) => {

    console.log("BODY:", req.body);

    console.log("QUERY:", req.query);

    console.log("CallFrom BODY:", req.body.CallFrom);

    console.log("CallFrom QUERY:", req.query.CallFrom);

    return res.status(200).send("OK");
});

app.get("/webhook/call", (req, res) => {

    console.log("FULL QUERY:", req.query);

    console.log("Caller Number:", req.query.CallFrom);

    return res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});