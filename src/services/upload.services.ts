import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";


// Registrar la subida de una IMAGE FILE
const registerUploadFile = async (storageFile: Storage) => {
    const responseStorage = await StorageModel.create(storageFile);

    return responseStorage;
}

export {
    registerUploadFile
}