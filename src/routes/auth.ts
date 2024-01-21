import { Request, Response, Router } from "express";

// Importar controlador de AUTH
import {
    registerController,
    loginController
} from "../controllers/auth.controller"

const router = Router();

// Rutas para registro y Login
router.post("/register", registerController);
router.post("/login", loginController);


export {router};