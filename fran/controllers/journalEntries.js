// import { Error } from 'mongoose'

// Import Model
import JournalEntry from '../models/journalEntry.js'


// * Index Route (HOME)
// Path: GET /api/journals
export const journalIndex = async (req, res) => {
  try {
    const foundJournals = await JournalEntry.find()
    if (!foundJournals) return res.status(404).json({ message: 'Not Found' })
    return res.json(foundJournals)
  } catch (error) {
    console.log(error)
    // sendError(error, res)
  }
}

// * Create Route (ADD NEW)
// Path: POST /api/journals
export const journalCreate = async (req, res) => {
  try {
    const newJournalEntry = await JournalEntry.create(req.body) // req.body is the JSON body sent by the user
    return res.status(201).json(newJournalEntry)
  } catch (error) {
    console.log(error)
    // sendError(error, res)
  }
}

// * Show Route (RETRIEVE)
// Path: GET /api/journals/:journalId
export const journalShow = async (req, res) => {
  try {
    const { journalId } = req.params
    const foundJournalEntry = await JournalEntry.findById(journalId)
    // If item not found, send 404
    if (!foundJournalEntry) return res.status(404).json({ message: 'Not Found' })
    // Otherwise (if item found), send item as 200
    return res.status(200).json(foundJournalEntry)
  } catch (error) {
    console.log(error)
    // sendError(error, res)
  }
}

// * Update Route (EDIT)
// Path: PUT /api/journals/:journalId
export const journalUpdate = async (req, res) => {
  try {
    const { journalId } = req.params
    const JournalEntryDocument = await JournalEntry.findById(journalId)
    // If item not found, send 404
    if (!JournalEntryDocument) return res.status(404).json({ message: 'Not Found' })
    // If item found, but the key requested does not exist?

    // Update the target object (from the db) with the source (req.body)
    Object.assign(JournalEntryDocument, req.body)
    // Save the update requested
    await JournalEntryDocument.save()
    // Return the latest database entry
    const updatedJournalEntry = await JournalEntry.findById(journalId)
    return res.json(updatedJournalEntry)
  } catch (error) {
    console.log(error)
    // sendError(error, res)
  }
}

// * Delete Route (DELETE)
// Path: DELETE /api/journals/:journalId
export const journalDelete = async (req, res) => {
  try {
    const { journalId } = req.params
    const deletedItem = await JournalEntry.findByIdAndDelete(journalId)
    if (!deletedItem) return res.status(404).json({ message: 'Not Found' })
    // Find index of item in items array, use that index to remove it
    return res.sendStatus(204) // status 204 cannot return a message
  } catch (error) {
    console.log(error)
    // sendError(error, res)
  }
}