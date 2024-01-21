import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { handleHttp } from "../utils/error.handle";

import { RequestExtend } from "../interfaces/request.interface";
import { JwtPayload } from "jsonwebtoken";

const checkSession = async (req: RequestExtend, res: Response, next: NextFunction) => {
    try {
        // Obtener el token de los headers
        const jwtByUser = req.headers.authorization;

        // Obtener el token desde los headers
        const token = jwtByUser?.split(" ").pop();
        console.log("TOKEN DESDE EL MIDDLEWARE => ", token);

        // Si no existe el token en los headers, retornar un STATUS 401 NO AUTORIZADO
        // SI EXISTE EL TOKEN, VALIDARLO
        // SI ES VALIDO GENERAR LA PROPIEDAD USER EN LA REQUEST PARA GENERAR LA IDENTIDAD DEL USUARIO.
        if (!token) {
            res.status(401).send({ message: "TOKEN_NOT_PROVIDED" });
        } else {
            // VALIDAR TOKEN
            const isUser = verifyToken(token) as JwtPayload ;

            // GENERAR PROPIEDAD USER EN EL LA REQUEST, CON LA IDENTIDAD DEL USUARIO. 
            req.user = isUser;

            next();
        }

    } catch (error: any) {
        handleHttp(res, "INVALID_SESSION", error);
    }
}

export {
    checkSession
}