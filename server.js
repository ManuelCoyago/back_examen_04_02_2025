import express from "express";
import cors from "cors";
import { EnrutadorArticulo } from "./routes/ArticuloRoutes.js";
import { Modelo } from "./models/articulo.js";

const app = express ();

app.use(express.json());

const PORT=3000;

app.use(cors({origin:"*"}));

app.use('/api/articulo',EnrutadorArticulo(Modelo));

app.listen(PORT,()=>{

    console.log("Escuchando en el puerto 3000");

})