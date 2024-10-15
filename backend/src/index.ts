import express from 'express';
const app = express();
import cors from 'cors'
import authroutes from './src/routes/authroutes'
import dotenv from 'dotenv'

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authroutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server running on Port ${PORT}`);
})