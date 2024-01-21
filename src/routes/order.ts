import { Router } from "express";
import { getAllOrders } from "../controllers/order.controllers";
import { checkSession } from "../middlewares/session.middleware";

// En esta ruta solo pueden acceder usuarios que tengan sesion activa
// Ósea, que tengan un JWT Válido.
const router = Router();

// Ruta para obtener todas las ordenes
router.get("/", checkSession, getAllOrders)


export{
    router
}