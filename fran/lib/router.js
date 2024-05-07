import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { journalIndex, journalShow, journalCreate, journalUpdate, journalDelete } from '../controllers/journalEntries.js'
import { register } from '../controllers/vips.js'
// import { register, login } from '../controllers/vips.js'
// import secureRoute from './secureRoute.js'

const router = Router()

router.route('/journals')
  .get(journalIndex)
  .post(journalCreate)

router.route('/journals/:journalId')
  .get(journalShow)
  .put(journalUpdate)
  .delete(journalDelete)

router.route('/register')
  .post(register)

// router.route('/login')
//   .post(login)

export default router