const express = require("express");
const app = express();

<<<<<<< HEAD
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
=======
const userRoute = require("./router/userRoute");
const authRoute = require("./router/authRoute");
const connectDB = require("./config/db");
>>>>>>> 88facc1dba0962951ceb633f014529a8733b9441

const port = 3000;

<<<<<<< HEAD
connectDB()
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(authRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

connectDB();
>>>>>>> 88facc1dba0962951ceb633f014529a8733b9441

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
