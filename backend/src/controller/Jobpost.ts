import {z} from 'zod'
import express, { Request, Response } from 'express'
import JobPost from '../dbmodels/jobpost';
import auth from '../middleware/auth';

const jobpostSchema = z.object({
  Title: z.string(),
  Description: z.string(),
  Experience: z.string(),
  Valid: z.date()
})


const jobPost = async (req: Request,res: Response): Promise<void> => {
     
    const check = jobpostSchema.safeParse(req.body);

    if(!check.success){
        res.status(401).json({msg:"Invalid Inputs"})
    }

    const { Title, Description, Experience, Valid } = req.body;

    const jobpost = await JobPost.create({
        Title: Title,
        Description: Description,
        Experience: Experience,
        Valid: Valid
    })
}

export default jobPost