import { Router } from 'express'
import { handleLogin, handleLogout, handleRegister } from '../controllers/user.controllers'
const router = Router()

router.route('/api/v1/user').get(handleLogin).post(handleRegister)
router.route('/api/v1/user/logout').get(handleLogout)

export default router