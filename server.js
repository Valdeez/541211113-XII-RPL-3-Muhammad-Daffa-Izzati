const express = require('express')
const app = express()
const userRouter = require('./router/userRoute')
const connectDB = require('./config/db')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})