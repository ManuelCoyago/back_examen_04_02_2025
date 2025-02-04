import mongoose, { Schema, model } from "mongoose";
import { conexion } from "../config/db.js";

conexion();

const modelSchema = new Schema(
    {
    idCode: String,
    nombreCompleto: String,
    articulo: String,
    cantProdComp: String,
    precioProdUn: String,
    },
    {
    versionKey: false
    }
);

const modelo = model("Modelo",modelSchema); 

export class Modelo {
    static async obtenerTodos(){
        try{
            return await modelo.find()
        } catch (e){
            console.log(e);
        }
    }

    static async obtenerPorId(id) {
        try {
            return await modelo.findById(id);
        } catch (e) {
            console.log(e);
        }
    }

    static async borrar(id) {
        try {
            return await modelo.deleteOne({ _id: id });
        } catch (e) {
            console.log(e);
        }
    }

    static async crear(datos) {
        const nuevoModelo = new modelo(datos);
        try {
            const modeloCreado = await nuevoModelo.save(); 
            return modeloCreado; 
        } catch (e) {
            console.error("Error al guardar el modelo en la base de datos:", e);
            throw new Error("No se pudo crear el modelo");
        }
    }
    


    static async actualizar(id, validacion) {
        if (!validacion.success) {
            return { error: "Validación de datos incorrecta" };
        }
        try {
            return await modelo.findOneAndUpdate(
                { _id: id },
                { ...validacion.data },
                { new: true }
            );
        } catch (e) {
            console.log(e);
        }
    }
}
export { modelo };