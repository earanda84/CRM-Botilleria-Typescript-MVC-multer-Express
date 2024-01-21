import {Schema, model} from "mongoose";
import { Storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<Storage>({
    fileName:{
        type: String,
        default: "user-avatar.png"
    },
    path: {
        type:String,
        // required: true,
    },
    userId: {
        // type: Schema.ObjectId,
        // ref: "users"
        type: String
    }
},{
    timestamps: true
})

const StorageModel = model("storage", StorageSchema)
export default StorageModel;