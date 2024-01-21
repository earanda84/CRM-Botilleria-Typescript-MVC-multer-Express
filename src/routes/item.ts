import { Request, Response, Router } from "express";
import { 
    deleteItem, 
    getItem, 
    getItems, 
    postItem, 
    updateItem 
} from "../controllers/item";
import { logHandle } from "../middlewares/log.middleware";

const router = Router();

// Manejador de rutas
router.post('/', postItem);
router.get('/', getItems);
router.get('/:id', logHandle, getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };