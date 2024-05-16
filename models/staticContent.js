import mongoose from 'mongoose'

const staticContentSchema = new mongoose.Schema({
  contentId: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  images: [{ type: String }]
},
{ timestamps: true }
)

export default mongoose.model('StaticContent', staticContentSchema)