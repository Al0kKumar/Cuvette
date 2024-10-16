import express from 'express'
import { Signup , verifyOTP } from '../controller/register';

const router = express.Router()

router.post('/register', Signup)

router.post('/verify-otp', verifyOTP);


export default router