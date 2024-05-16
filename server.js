// DB Name = journals
// Model Name = JournalEntry
// journals.journalentries
// https://cloud.mongodb.com/v2/6639ec476e4fa57000eac94f#/metrics/replicaSet/663a032512adde30b749a440/explorer/journals/journalentries/find

import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './lib/router.js'

// For Deployment
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const { PORT, CONNECTION_STRING } = process.env
// console.log(process.env)

// Generic Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api', router)

// For Deployment
app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

// Start server
async function startServers() {
  try {
    // Connect to database (MongoDB Atlas)
    await mongoose.connect(CONNECTION_STRING)
    // Start Express server listening
    app.listen(PORT, () => console.log(`SERVER: up and running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
startServers()