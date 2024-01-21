import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUploadFile } from "../services/upload.services";
import { RequestExtend } from "../interfaces/request.interface";
import { Storage } from "../interfaces/storage.interface";

// interface Id extends RequestExtend {
//     id?: string | undefined;
// }

// Subir imagen al server
const uploadFile = async (req: RequestExtend, res: Response) => {
    try {
        
        
        // Objeto para Carga del archivo llamando al service
        const dataToUpload: Storage = {
            fileName: req.file?.filename,
            path: req.file?.path,
            userId: req.user?.id 
        } 


        const fileToUpload = await registerUploadFile(dataToUpload);

        res.send({ file_uploaded: fileToUpload })
    } catch (error: any) {
        handleHttp(res, "ERROR_UPLOAD_FILE", error)
    }
}

export {
    uploadFile
}