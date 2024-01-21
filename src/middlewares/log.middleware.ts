import { NextFunction, Request, Response } from "express";

const logHandle = (req: Request, res:Response, next: NextFunction) => {
    
    const response = req.headers
    
    res.json(response)
}

export {
    logHandle
}