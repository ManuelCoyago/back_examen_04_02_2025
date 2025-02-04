import mongoose  from "mongoose";
export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb+srv://alexasalexc:5RotPBwi398VaLct@examen.0vob4.mongodb.net/?retryWrites=true&w=majority&appName=Examen");
     console.log ("Connected");

   }
    catch (e){
        console.log("Connection Failed")
        console.log(e)
    }
}
