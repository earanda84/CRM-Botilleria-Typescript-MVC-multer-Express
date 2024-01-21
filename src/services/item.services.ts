import { Request } from "express"
import ItemModel from "../models/Item.model"
import { Car } from "../interfaces/car.interface"

// CREAR UN NUEVO CAR
const insertCar = async (item: Car) => {

    // Forma 1 Insertar en MongoDB
    // const newItem = new ItemModel(item);
    // return await newItem.save();

    // Forma 2 Insertar en MongDB
    return await ItemModel.create(item);
}

// OBTENER TODOS LOS CARS
const getCars = async () => {
    const response = await ItemModel.find({}).sort({price: 1});
    return response;
}

// OBTENER UN CAR POR ID
const getCar = async (id: string) => {
    const response = await ItemModel.findById(id);
    return response;
}

// ACTUALIZAR UN CAR POR ID
const updateCar = async (id: string, data: Car) => {
    const response = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true });

    return response;
}

// Eliminar un car por ID
const deleteCar = async(id: string) => {
    const response = await ItemModel.findOneAndDelete({_id:id});

    return response;
}
export {
    insertCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
}