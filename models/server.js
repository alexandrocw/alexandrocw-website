const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Loaded from .env file
        this.paths = {

        };

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors()); // Enable CORS
        this.app.use(express.json());

        // Pick up React index.html file
        this.app.use(
            express.static(path.join(__dirname, "../client/build"))
        );
    }

    // Bind controllers to routes
    routes() {
        // Catch all requests that don't match any route
        this.app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;