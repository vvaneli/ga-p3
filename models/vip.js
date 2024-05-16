import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// User schema
const vipSchema = new mongoose.Schema({
  // 1. Core
  nickname: {
    type: String, required: [true, '🕶️ A nickname is necessary to create an account. You can change this later.'],
  },

  email: {
    type: String, required: [true, '📮 An email address is necessary to create an account.'],
    unique: [true, '🤦 This email is already registered.']
  },

  password: {
    type: String, required: [true, '🤫 A password is necessary to create an account.'],
  },

  // 2. More
  profileImg: { type: String },
  tags: [{ type: String }],
  progress: [{ type: Number }, { type: Date }, { type: Boolean }],
  progressCounter: { type: Number },
},
{ timestamps: true }
)

// Model

// remove the password from json responses
vipSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
  },
});

// password confirmation
vipSchema
  .virtual('passwordConfirm')
  .set(function (value) {
    this._passwordConfirm = value
  })

// password validation
vipSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirm) {
      this.invalidate('passwordConfirm', '👯‍♂️ Found a double trouble... the password and the password confirmation need to be the same.')
    }
    next()
  })

// if validaed, has the password and save it to the database
vipSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
    }
    next()
  })

export default mongoose.model('Vip', vipSchema)