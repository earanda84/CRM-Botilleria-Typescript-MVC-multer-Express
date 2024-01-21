import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = async(req:Request, res:Response) => {
    try {
        const body = req.body;
        console.log(body)
        res.send({data: body})
    } catch (error) {
       handleHttp(res,"ERROR_GET_BLOG")
    }
}

const getItems = async(req:Request, res:Response) => {
    
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res,"ERROR_GET_BLOGS")
    }
}

const updateItem = async(req:Request, res:Response) => {
    
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res,"ERROR_UPDATE_BLOG")
    }

}

const postItem = async(req:Request, res:Response) => {
    
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res,"ERROR_POST_BLOG")
    }
}

const deleteItem = async(req:Request, res:Response) => {
    
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_BLOG")
    }
}

export {
    postItem,
    getItem,
    getItems,
    updateItem,
    deleteItem
}