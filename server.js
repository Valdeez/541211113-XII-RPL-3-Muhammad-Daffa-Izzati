const express = require("express");
const app = express();

const userRoute = require("./router/userRoute");
const authRoute = require("./router/authRoute");
const connectDB = require("./config/db");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(authRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

connectDB();

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
