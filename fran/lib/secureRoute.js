import jwt from 'jsonwebtoken'
import 'dotenv/config'

import Vip from '../models/vip.js'

export default async (req, res, next) => {
  try {
    console.log('At Secure Route')
    console.log('Headers: ', req.headers)
    if (!req.headers.authorization) {
      return res.status(401).json({ message: '🪵 Please log in' })
    }
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('Token: ', token)
    const payload = jwt.verify(token, process.env.SECRET)
    console.log('JWT payload: ', payload)
    const foundVip = await Vip.findById(payload.sub)
    if (!foundVip) throw new Error('🫥 Account not found')
    next()
  } catch (error) {
    console.log(error.message)
    return res.status(401).json({ message: '🪵 Please log in' })
  }
}