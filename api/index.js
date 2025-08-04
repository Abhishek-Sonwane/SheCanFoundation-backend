const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const users = require("../utils/data"); // adjust path if needed

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/users", (req, res) => {
	res.json({
		message: "Data Received",
		success: true,
		data: users,
	});
});

app.get("/api", (req, res) => {
	res.json("She Can Foundation");
});

module.exports = app;
module.exports.handler = serverless(app);
