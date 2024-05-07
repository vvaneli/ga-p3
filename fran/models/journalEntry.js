import mongoose from 'mongoose'

const journalSchema = new mongoose.Schema({
  timestampNew: {type: Date, required: true},
  timestampEdited: {type: Date},
  tags: [{type: String}],
  images: [{type: String}],
  sticker: {type: String},
  title: {type: String},
  situation: {type: String, required: [true, 'This is a required field']},
  feeling1: [{type: String, required: [true, 'This is a required field']}],
  feeling1Rate: {type: Number, required: [true, 'This is a required field']},
  feeling2: [{type: String}],
  feeling2Rate: {type: Number},
  internal: {type: String, required: [true, 'This is a required field']},
  external: {type: String},
  permanent: {type: String},
  temporary: {type: String},
  global: {type: String},
  specific: {type: String}
  })
  
  export default mongoose.model('JournalEntry', journalSchema)