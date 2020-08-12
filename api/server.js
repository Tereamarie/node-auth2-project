const express = require('express');
const CORS = require('cors');
const server = express();
const morgan = require("morgan");



// Logger
server.use(morgan("dev"));
// Converts to json objects
server.use(express.json());

// Root route
server.use("/", (req, res) => {
	res.json({ message: "API is up and running..." });
});

// Error handling route
server.use("/", (error, req, res, next) => {
	console.log(error);
	res.status(500).json({ message: "Something went wrong." });
});

module.exports = server;