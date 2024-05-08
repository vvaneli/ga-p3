import mongoose from 'mongoose'

// Options https://mongoosejs.com/docs/guide.html#options

const journalReactSchema = new mongoose.Schema({
  feeling1: [{ type: String, required: [true, 'This is a required field'] }],
  feeling1Rate: { type: Number, min: 1, max: 10, required: [true, 'This is a required field'] },
  internal: { type: String, required: [true, 'This is a required field'] },
  permanent: { type: String },
  global: { type: String },
  notes: { type: String },
  vipId: { type: mongoose.ObjectId, ref: "vips", required: true }
},
  { timestamps: true }
)

const journalReflectSchema = new mongoose.Schema({
  feeling2: [{ type: String, required: [true, 'This is a required field'] }],
  feeling2Rate: { type: Number, min: 1, max: 10, required: [true, 'This is a required field'] },
  external: { type: String },
  temporary: { type: String },
  specific: { type: String },
  notes: { type: String },
  vipId: { type: mongoose.ObjectId, ref: "vips", required: true }
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
  vipId: { type: mongoose.ObjectId, ref: "vips", required: true }
},
  { timestamps: true }
)

export default mongoose.model('JournalEntry', journalEntrySchema)