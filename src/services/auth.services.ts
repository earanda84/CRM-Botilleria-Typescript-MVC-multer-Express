// import { Auth } from "../interfaces/auth.interface"

import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"

import {
    encryptPassword,
    verifiedPassword
} from "../utils/hash-password.handle";

import { Auth } from "../interfaces/auth.interface";
import { 
    generateToken,
    verifyToken
} from "../utils/jwt.handle";

const registerNewUser = async (user: User) => {
    const checkUserInDb = await UserModel.findOne({ email: user.email });

    if (checkUserInDb) return "USER_ALREADY_EXISTS.";

    const hashPassword = await encryptPassword(user.password);

    const registerNewUser = await UserModel.create({ ...user, password: hashPassword });


    return registerNewUser;
}


const loginUser = async (authUser: Auth): Promise<void | string | object> => {
    // Verificar si existe el usuario mediante el correo
    const checkUserInDb = await UserModel.findOne({ email: authUser.email });

    // variable error.
    let error = undefined;

    // Si no existe usuario, generar error
    if (!checkUserInDb) return error = "USER_NOT_FOUND";

    // Comparar la password de base de datos con password de la request
    const comparePassword = await verifiedPassword(authUser.password, checkUserInDb.password)

    // Comparar si password es incorrecta, generar error.
    if (!comparePassword) return error = "PASSWORD_INCORRECT";

    // Generar TOKEN, enviando id del usuario de la base de datos.
    const token = generateToken(checkUserInDb._id.toString());

    // Datos de respuesta al cliente
    const response = {
        token,
        user: checkUserInDb,
        error,
    }

    return response
}


export {
    registerNewUser,
    loginUser
}