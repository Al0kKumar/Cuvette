import express from 'express';
const app = express();
import cors from 'cors'
import jobpost from './routes/jobPost'
import authroutes from './routes/authroutes'
import dotenv from 'dotenv'

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authroutes)

app.use('api/user', jobpost)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server running on Port ${PORT}`);
})