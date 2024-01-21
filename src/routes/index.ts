import { Request, Response, Router } from "express";

// readdirSync 
import { readdirSync } from "fs"

// Est devuelve Path del directorio actual
const PATH_ROUTER = `${__dirname}`;
// console.log(PATH_ROUTER)

const router = Router();

// Funcion para Limpiar el fileName
const cleanFileName = (fileName: string) => {
    // Aca entra las rutas de los archivos existentes en la ruta y quito el primer elemento para eliminar la extensión ts.
    // shift, elimina y retorna el primer elemento del array.
    const file = fileName.split(".").shift(); // retorna el file la ruta del archivo

    return file;
}

// Escanea cuantos archivos existen o cuales son los archivos que existen en el directorio actual.
readdirSync(PATH_ROUTER).filter((fileName) => {
    console.log(fileName)
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta ${cleanName}`)
            router.use(`/api/v1/${cleanName}`, moduleRouter.router)
        })        
    }
})


export { router };