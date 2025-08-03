const express = require("express");
const cors = require("cors");
const users = require("./utils/data");

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/users", (req, res) => {
	res.json({
		message: "Data Received",
		success: true,
		data: users,
	});
});

app.get("/", (req, res) => {
	res.json("She Can Foundation");
});

app.listen(PORT, () => {
	console.log(`Server is Running on PORT ${PORT}`);
});
