import {Router} from "express";
import { Controlador } from "../controllers/artController.js";

export const EnrutadorArticulo =(modelo) =>{
    
const controlador=new Controlador(modelo);
const rutas=Router();


rutas.get('/',controlador.getAll)

rutas.get('/:id',controlador.getById)

rutas.delete('/:id',controlador.delete)
  
rutas.post('/',controlador.create)

rutas.put('/:id',controlador.update)

return rutas;
}