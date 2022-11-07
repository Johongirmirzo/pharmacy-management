import {Request, Response, NextFunction} from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) =>{
    console.log("Admin user", req.user)
    if(req?.user?.isAdmin){
        return next()
    }
    res.status(403).json({message: "You are not admin! You can't access this resource!"})
}