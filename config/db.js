import mongoose  from "mongoose";
export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb://localhost:27017/Fullstack");
     console.log ("Connected");

   }
    catch (e){
        console.log("Connection Failed")
        console.log(e)
    }
}
