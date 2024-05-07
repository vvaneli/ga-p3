// Import Model
import JournalEntry from '..journalEntry.js'

// * Index Route (HOME)
export const journalEntryIndex = async (req, res) => {
  try {
    const foundJournalEntry = await JournalEntry.find()
    if (!foundJournalEntry) return res.status(404).json({ message: 'Not Found' })
    return res.json(foundJournalEntry)
  } catch (error) {
    console.log(error)
    // sendError(error, res)
  }
}

// * Create Route (ADD NEW)

// * Show Route (RETRIEVE)

// * Update Route (EDIT)

// * Delete Route (DELETE)
