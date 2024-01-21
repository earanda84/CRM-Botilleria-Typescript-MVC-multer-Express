import "dotenv/config";
import express from "express";
import cors from "cors";

// MANEJADOR DE RUTAS
import { router } from "./routes";

// Importar conexión database
import db from "./config/mongo"

const PORT = process.env.PORT || 9001;

const app = express();

// Habilitar cors 
app.use(cors({
    origin: "*",
}));

// PARA QUE RECIBA DATOS POR EL BODY en formato JSON
app.use(express.json());

// Recibir datos mediante url encoded
app.use(express.urlencoded({ extended: true }));


// Uso de ENRUTADOR
app.use(router);

// Ejecución conexión base de datos.
db()
    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch((err) => {
        console.log(err)
    });

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));



