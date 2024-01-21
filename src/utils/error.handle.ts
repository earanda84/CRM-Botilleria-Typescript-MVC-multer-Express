import { Response } from "express";

const handleHttp = (res:Response, message: string, error?: any) =>{
    // console.log(error)
    res.status(500);
    res.send({message, error: error.message})
}

export {
    handleHttp
}