import express from 'express'
import jobPost from '../controller/Jobpost';
import auth from '../middleware/auth';

const router = express.Router();

router.put('/job-post', auth ,jobPost)

export default router