import Vip from '../models/vip.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import sendError from '../lib/errors.js'

// * Register Route (make an account)
// Path: POST /api/account/register
export const register = async (req, res) => {
  console.log('At Register Route')
  try {
    const registeredVip = await Vip.create(req.body)
    // console.log(registeredVip)
    // Create auth token
    const token = jwt.sign(
      { sub: registeredVip._id },	// payload
      process.env.SECRET,	// secret
      { expiresIn: '1d' }	// 1 day 
    )
    console.log(token) // check in debugger at jwt.io
    // Send back the token with a success message
    return res.status(201).json(
      {
        message: `Welcome, ${registeredVip.nickname}. It's good to have you here, let's take a look around...`,
        token: token,
      }
    )
    // return res.json({ message: `Welcome, ${registeredVip.nickname}. It's good to have you here, let's take a look around...` })
  } catch (error) {
    console.log(error)
    sendError(error, res)
    return res.json(error.message)
  }
}

// * Login Route
// Path: POST /api/account/login
export const login = async (req, res) => {
  // console.log('At Login Route')
  try {
    // Find the acount
    const foundVip = await Vip.findOne({ email: req.body.email } || { nickname: req.body.nickname })
    if (!foundVip) {
      return res.status(401).json({ message: 'Those account details don\'t seem to be correct.' })
    }
    // Check password
    if (!bcrypt.compareSync(req.body.password, foundVip.password)) {
      console.log('Password do not match')
      return res.status(401).json({ message: 'Those account details don\'t seem to be correct.' })
    }
    // Create auth token
    const token = jwt.sign(
      { sub: foundVip._id },	// payload
      process.env.SECRET,	// secret
      { expiresIn: '1d' }	// 1 day 
    )
    console.log(token) // check in debugger at jwt.io
    // Send back the token with a success message
    return res.status(200).json(
      {
        message: `Hello ${foundVip.nickname}, welcome back.`,
        token: token,
      }
    )
  } catch (error) {
    console.log(error)
    sendError(error, res)
    return res.json(error.message)
  }
}

// * Show Route (show account details)
// Path: GET /api/account/:id
export const vipAccount = async (req, res) => {
  console.log('At Account Show Route')
  try {
    // const { vipId } = req.params
    // const foundVip = await Vip.findById(vipId)
    // If item not found, send 404
    // if (!foundVip) return res.status(404).json({ message: '🫥 Account not found' })
    // Otherwise (if item found), send item as 200
    // return res.status(200).json(foundVip)
    return res.status(200).json(req.currentUser)
  } catch (error) {
    console.log(error)
    sendError(error, res)
    return res.json(error.message)
  }
}

// * Update Route (edit account details)
// Path: PUT /api/account/:id
export const vipAccountEdit = async (req, res) => {
  console.log('At Account Edit Route')
  try {
    // const { vipId } = req.params
    const { vipId } = req.currentUser._id
    const vipDocument = await Vip.findById(vipId)
    // If item not found, send 404
    if (!vipDocument) return res.status(404).json({ message: '🫥 Account not found' })
    // Update the target object (from the db) with the source (req.body)
    Object.assign(vipDocument, req.body)
    // Save the update requested
    await vipDocument.save()
    // Return the latest database entry
    const updatedVip = await Vip.findById(vipId)
    return res.json(updatedVip)
  } catch (error) {
    console.log(error)
    sendError(error, res)
    return res.json(error.message)
  }
}

// * Delete Route (delete account)
// Path: DELETE /api/account/delete
export const vipAccountDelete = async (req, res) => {
  console.log('At Account Delete Route')
  try {
    // const { vipId } = req.params
    // const { vipId } = req.currentUser._id
    // const deletedVip = await Vip.findByIdAndDelete(vipId)
    const deletedVip = await Vip.findByIdAndDelete(req.currentUser._id)
    // if (!deletedVip) return res.status(404).json({ message: '🫥 Account not found' })
    // if (!req.currentUser) return res.status(404).json({ message: '🫥 Account not found' })
    return res.sendStatus(204) // 204 cannot return a message
  } catch (error) {
    console.log(error)
    sendError(error, res)
    return res.json(error.message)
  }
}