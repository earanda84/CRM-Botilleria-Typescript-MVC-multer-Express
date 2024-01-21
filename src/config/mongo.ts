import "dotenv/config";

import {connect} from "mongoose";


const dbConnect= async():Promise<void>  => {
    const DB_URI:string | undefined =  process.env.DB_URI;
    if(DB_URI){
        await connect(DB_URI);
    }else{
        throw new Error("Error al conectar la base de datos.")
    }
    
}

export default dbConnect;