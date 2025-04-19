import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName: {
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },

    password :{
       type:String,
       required:true

    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
      
    }


},{timestamps:true})

 export const User = mongoose.model("User", userSchema);
