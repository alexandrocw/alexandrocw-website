// Initialize dotenv environment
require('dotenv').config();


// Import required frameworks and modules
const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');
const { v4 } = require('uuid');

// For app to use assets folder
app.use("/public", express.static(path.join(__dirname + "/public")));

// GET response
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/api", (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}>${path}</a>`);
})

// Listen to port
app.listen(config.PORT, () => {
    console.log(`Listening on PORT ${config.PORT}`);
});