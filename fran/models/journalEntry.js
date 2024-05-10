import mongoose from 'mongoose'

// Options https://mongoosejs.com/docs/guide.html#options

const journalReactSchema = new mongoose.Schema({
  moodReact: [{ type: String, required: [true, 'This is a required field'] }],
  moodReactRate: { type: Number, min: 1, max: 10, required: [true, 'This is a required field'] },
  internal: { type: String, required: [true, 'This is a required field'] },
  permanent: { type: String },
  global: { type: String },
  note: { type: String },
  vipId: { type: mongoose.ObjectId, ref: 'vips', required: true },
},
{ timestamps: true }
)

const journalReflectSchema = new mongoose.Schema({
  moodReflect: [{ type: String, required: [true, 'This is a required field'] }],
  moodReflectRate: { type: Number, min: 1, max: 10, required: [true, 'This is a required field'] },
  external: { type: String },
  temporary: { type: String },
  specific: { type: String },
  note: { type: String },
  vipId: { type: mongoose.ObjectId, ref: 'vips', required: true },
},
{ timestamps: true }
)

const journalEntrySchema = new mongoose.Schema({
  tags: [{ type: String }],
  images: [{ type: String }],
  sticker: { type: String },
  title: { type: String },
  situation: { type: String, required: [true, 'This is a required field'] },
  reaction: journalReactSchema,
  reflection: journalReflectSchema,
  vipId: { type: mongoose.ObjectId, ref: 'vips', required: true },
},
{ timestamps: true }
)

export default mongoose.model('JournalEntry', journalEntrySchema)