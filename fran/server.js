// DB Name = journals
// Model Name = JournalEntry
// journals.journalentries
// https://cloud.mongodb.com/v2/6639ec476e4fa57000eac94f#/metrics/replicaSet/663a032512adde30b749a440/explorer/journals/journalentries/find

import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import 'dotenv/config'

// Import Model
import JournalEntry from './models/journalEntry.js'

const app = express()
const { PORT, CONNECTION_STRING } = process.env
// console.log(process.env)

// Generic Middleware
app.use(express.json())
app.use(morgan('dev'))

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