import Vip from '../models/vip.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// * Register Route (make an account)

export const register = async (req, res) => {
  console.log('At Register Route')
  try {
    const registeredVip = await Vip.create(req.body)
    // console.log(registeredVip)

    return res.json({ message: `Welcome, ${registeredVip.username}. It's good to have you here, let's take a look around...`})

  } catch (error) {
    console.log(error)
    return res.json(error.message)
    // sendError(error, res)
  }
}

// * Login Route

