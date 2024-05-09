import mongoose from 'mongoose'
import 'dotenv/config'

// Model and seed data
import JournalEntry from '../models/journalEntry.js'
import journalSeedData from './data/journalEntries.js'

// console.log(journalEntriesData)

async function seedData() {
  try {
    // 1. Connect to DB
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('1. ▶️ DATABASE: connected')
    // 2. Remove existing data in DB
    const deletedFromDB = await JournalEntry.deleteMany()
    console.log('2. ❎ DELETE: deletedFromDB -- ' + deletedFromDB.deletedCount + ' deleted')
    // 3. Add seed data to DB
    const seededData = await JournalEntry.create(journalSeedData)
    console.log('3. ✅ ADD: seededData -- ' + seededData.length + ' added, as follows: ' + seededData)
    // 4. Close DB connection
    await mongoose.connection.close()
    console.log('4. 🛑 DATABASE: disconnected')
  } catch (error) {
    console.log(error)
  }
}
seedData()