import { Request, Response, NextFunction } from "express";
import multer from "multer";

const multerConfig = {
    storage: multer.diskStorage({
        destination: (req:Request, file: Express.Multer.File, cb:any) => {
            cb(null, "./storage/avatars");
        },
        filename: (req: Request, file: Express.Multer.File, cb:any) => {
            const extensionFile = file.originalname.split(".").pop();
            
            const filenameRandom = `image-${Date.now()}.${extensionFile}`;

            cb(null, filenameRandom);
        }
    }),
    fileFilter(req:Request, file: Express.Multer.File, cb:any) {
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
            cb(null, true)
        }else{
            cb(new Error("Invalid format File."))
        }
    }
}

const multerMiddleware = multer(multerConfig).single("myFile");

export {
    multerMiddleware
}