import mongoose, { Schema, Types, model, Model, mongo } from "mongoose";
import { Car } from "../interfaces/car.interface";



const ItemSchema = new Schema<Car>({
    color: {
        type: String,
        required: true,
    },
    combustible: {
        type: String,
        required: true,
        enum: ["bencina", "eléctrico", "diesel"]
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
})

const ItemModel = model("items", ItemSchema);

export default ItemModel;