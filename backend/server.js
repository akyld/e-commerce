const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const mainRoute = require('./routes/index.js')
const port = 5000

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Error connecting to MongoDB', error)
  }
}

app.use('/api', mainRoute)

app.listen(port, () => {
  connect()
  console.log(`Server is running at ${port}`)
})
