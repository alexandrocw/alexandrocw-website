// Initialize dotenv environment
require('dotenv').config();


// Import required frameworks and modules
const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');

// For app to use assets folder
app.use("/public", express.static(path.join(__dirname + "/public")));
app.use("/assets", express.static(path.join(__dirname + "/assets")));

// GET response
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/aldebaransamudera", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/aldebaransamudera.html"));
});

// Listen to port
app.listen(config.PORT, () => {
    console.log(`Listening on PORT ${config.PORT}`);
});