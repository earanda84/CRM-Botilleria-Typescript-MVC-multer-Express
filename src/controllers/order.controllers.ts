import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExtend } from "../interfaces/request.interface";


// Obtener todas las ordenes
// PARA ACCEDER A ESTA RUTA DEBE PASAR POR EL MIDDLEWARE DE SESSION.

// PODRIA EVENTUALMENTE, CON LA IDENTIDAD DEL USUARIO, GENERAR UNA TRAZABILIDAD DE QUIEN HIZO TAL Y CUAL COSA.
const getAllOrders = async (req: RequestExtend, res: Response) => {
    try {

        res.send({authorization: req.headers.authorization, user: req.user})
    } catch (error) {
        handleHttp(res, "ERROR_GET_ORDERS", error)
    }
}

export {
    getAllOrders
}