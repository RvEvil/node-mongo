const express = require("express")
const mongoose = require("mongoose")
const usersRouter = require("./routes/users")

const app = express()

mongoose
	.connect("mongodb://localhost:27017/testdb")
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err))

app.use(express.json())

app.use("/users", usersRouter)
app.listen(3000, () => console.log("Server started at 3000"))
