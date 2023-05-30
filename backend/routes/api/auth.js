import express from 'express'
import { loginUser, registerUser, getAllUsers } from '../../controllers/user.js'
const router = express.Router()

// POST /api/v1/auth/register
router.post('/register', registerUser)

// POST /api/v1/auth/login
router.post('/login', loginUser)

//delete later
router.get('/users', getAllUsers)

export default router
