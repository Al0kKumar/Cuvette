import express from 'express'
import { verifyOTP, Signup } from '../controller/register'

const router = express.Router()

router.post('/register', Signup)

router.post('/verify-otp', verifyOTP);


export default router