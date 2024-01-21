import mongoose, { Schema, Types, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: "Hola soy .....",
    }
}, {
    timestamps: true,
})

const UserModel = model("users", UserSchema);

export default UserModel;