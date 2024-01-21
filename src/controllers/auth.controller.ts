import { Request, Response } from "express"
// IMPORTAR SERVICES AUTH
import {
    registerNewUser,
    loginUser
} from "../services/auth.services"
import { handleHttp } from "../utils/error.handle";

// Registrar nuevo USUARIO
const registerController = async (req: Request, res: Response) => {

    try {
        const responseUser = await registerNewUser(req.body);

        const data = responseUser ? responseUser : "USER_ALREADY_EXISTS"

        res.send({response: data})
    } catch (error) {
        handleHttp(res, "ERROR_REGISTER_USER", error)
    }

}

// Login de USUARIO
const loginController = async (req: Request, res: Response) => {

    try {
        const responseLogin = await loginUser(req.body);
        
        if(responseLogin === "USER_NOT_FOUND" || responseLogin === "PASSWORD_INCORRECT"){
        
            res.status(401)
            res.send({error: responseLogin})
        }else{
            res.send({response: responseLogin})
        }

        
    } catch (error) {
        handleHttp(res, "ERROR_LOGIN_USER", error)
    }
}

export {
    registerController,
    loginController
}