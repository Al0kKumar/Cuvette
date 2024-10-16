import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface IUserPayload{
    _id: string,
    Name: string
}


declare global {
    namespace Express {
        interface Request {
            user?: IUserPayload; 
        }
    }
}

const auth = (req: Request, res: Response, next: NextFunction) :void => {

    const header = req.headers['authorization'];

    const token = header?.split(' ')[1];

    if(!token){
        res.status(401).json({msg:"Empty token"});
        return;
    }

    const validate = jwt.verify(token,process.env.JWT_SECRET as string, (err, user) => {
        if(err){
            return res.status(401).json({msg:"Invalid token"})
        }
        req.user = user as IUserPayload
        next();
    })

}

export default auth;

