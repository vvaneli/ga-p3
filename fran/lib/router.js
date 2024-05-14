import { Router } from 'express'

import { journalIndex, journalShow, journalCreate, journalUpdate, journalDelete } from '../controllers/journalEntries.js'
import { register, login, vipAccount, vipAccountEdit, vipAccountDelete } from '../controllers/vips.js'
import secureRoute from './secureRoute.js'

const router = Router()

// * JOURNALS

router.route('/journals')
  // .get(journalIndex) // secure route removed temporarily for testing
  .get(secureRoute, journalIndex)
  .post(secureRoute, journalCreate)

router.route('/journals/:journalId')
  .get(secureRoute, journalShow)
  .put(secureRoute, journalUpdate)
  .delete(secureRoute, journalDelete)

// * ACCOUNTS

router.route('/account/register')
  .post(register)

router.route('/account/login')
  .post(login)

// router.route('/account/:vipId')
router.route('/account')
  .get(secureRoute, vipAccount)
  .put(secureRoute, vipAccountEdit)
  .delete(secureRoute, vipAccountDelete)

export default router