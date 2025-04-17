
import mongoose from "mongoose";


export const dbConnect = async () =>{

    await mongoose.connect("mongodb+srv://anish2711998:pysiRuK9GkLEhGBI@devtinder.w6bzqhk.mongodb.net/?retryWrites=true&w=majority&appName=DevTinder");

};


