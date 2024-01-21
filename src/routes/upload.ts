import { Router } from "express";
import { multerMiddleware } from "../middlewares/upload.middleware";
import { checkSession } from "../middlewares/session.middleware";
import { uploadFile } from "../controllers/upload.controller";
const router = Router();

// Subir archivos con MULTER

router.post("/", checkSession, multerMiddleware, uploadFile)

export {
    router
}