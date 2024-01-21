import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import {
    insertCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
} from "../services/item.services";

// Obtener Car por ID
const getItem = async (req: Request, res: Response) => {
    try {
        const response = await getCar(req.params.id)

        const data = response ? response : "NOT_FOUND";
        res.send({response: data})
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM")
    }
}

// Obtener todos los ITEMS => OK
const getItems = async (req: Request, res: Response) => {

    try {

        const response = await getCars();
        res.send(response);
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS")
    }
}

// Actualizar item Por ID
const updateItem = async (req: Request, res: Response) => {

    try {
        const response = await updateCar(req.params.id, req.body);
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEM", error)
    }

}

// Crear un Item => OK
const postItem = async (req: Request, res: Response) => {

    try {
        const response = await insertCar(req.body)

        res.send({ item_creado: response })
    } catch (error: any) {

        handleHttp(res, "ERROR_POST_ITEM", error)
    }
}

// Eliminar un Item por ID.
const deleteItem = async (req: Request, res: Response) => {

    try {
        const response = await deleteCar(req.params.id);

        const data = response ? response : "NOT_FOUND."

        res.send({response: data})
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEM", error)
    }
}

export {
    postItem,
    getItem,
    getItems,
    updateItem,
    deleteItem
}