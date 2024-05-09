import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { journalIndex, journalShow, journalCreate, journalUpdate, journalDelete } from '../controllers/journalEntries.js'
import { register, login, vipAccount, vipAccountEdit, vipAccountDelete } from '../controllers/vips.js'
import secureRoute from './secureRoute.js'

const router = Router()

// * JOURNALS

router.route('/journals')
  .get(secureRoute, journalIndex)
  .post(secureRoute, journalCreate)

router.route('/journals/:journalId')
  .get(secureRoute, journalShow)
  .put(secureRoute, journalUpdate)
  .delete(secureRoute, journalDelete)

// * ACCOUNTS

router.route('/accounts/register')
  .post(register)

router.route('/accounts/login')
  .post(login)

router.route('/accounts/:vipId')
  .get(secureRoute, vipAccount)
  .put(secureRoute, vipAccountEdit)
  .delete(secureRoute, vipAccountDelete)

export default router