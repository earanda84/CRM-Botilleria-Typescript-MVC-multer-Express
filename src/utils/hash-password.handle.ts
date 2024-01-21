import {hash, compare} from "bcryptjs";

// METODO DE ENCRIPTACION PASSWORD
const encryptPassword = async(password: string):Promise<string> => {

    return await hash(password, 12);
}


// METODO DE DESENCRIPTACION PASSWORD
const verifiedPassword = async(password:string, encryptPassword:string): Promise<boolean> =>{
    return await compare(password, encryptPassword);
}

export {
    encryptPassword,
    verifiedPassword
}
