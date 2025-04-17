import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName: {
        type:String
    },
    emailId:{
        type:String,
        require:true
    },

    password :{
       type:String
    },

    age:{
        type:Number 
    },

    gender:{
        type:String
      
    }


},{timestamps:true})

 export const User = mongoose.model("User", userSchema);
