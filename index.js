const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.post("/webhook/call", (req, res) => {

    if(!req.body){
        console.log("got nothing");
       return res.sendStatus(401);
        
    }
    console.log("BODY:", req.body);

    return res.sendStatus(200);
    
});

app.listen(PORT, () => {
    console.log("Server running");
});