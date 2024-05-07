import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { journalIndex, journalShow, journalCreate, journalUpdate, journalDelete } from '../controllers/journalEntries.js'
import { register, login, vipAccount, vipAccountEdit, vipAccountDelete } from '../controllers/vips.js'
// import secureRoute from './secureRoute.js'

const router = Router()

router.route('/journals')
  .get(journalIndex)
  .post(journalCreate)

router.route('/journals/:journalId')
  .get(journalShow)
  .put(journalUpdate)
  .delete(journalDelete)

router.route('/account/register')
  .post(register)

router.route('/account/login')
  .post(login)

router.route('/account/:vipId')
  .get(vipAccount)
  .put(vipAccountEdit)
  .delete(vipAccountDelete)

export default router